import { useState } from "react";
import { Navigate, useLocation } from "react-router";
import Button from "../../common/Button/Button";
import { getCourseFromKey } from "../../helpers/getCourseFromKey";
import "./CourseInfo.css";
import { getAuthorsname } from "../../helpers/getAuthorsname";
import { mockedAuthorsList } from "../../constants";
import { formatCreationDate } from "../../helpers/formatCreationDate";
import { getCourseDuration } from "../../helpers/getCourseDuration";

const CourseInfo = () => {
    const [isNavigate, setIsNavigate] = useState(false);

    const courseKey = useLocation().pathname.split('/')[2];
    const courseInfo = getCourseFromKey(courseKey);

    if (!courseInfo) {
        return <Navigate to={`/`} />
    }

    const handleBacktoCourses = () => {
        setIsNavigate(true);
    }

    if (isNavigate) {
        return <Navigate to={`/`} />
    }

    return (
        <div className="course__info__container">
            <Button title="Back to courses" onClick={handleBacktoCourses} />

            <div className="course__info__data">
                <h1 className="course__info_title" key={courseInfo.id}>{courseInfo.title}</h1>

                <div className="course__info__metadata">
                    <p>By {getAuthorsname(courseInfo.authors, mockedAuthorsList)}</p>
                    <p>Created On : {formatCreationDate(courseInfo.creationDate)}</p>
                    <p>{getCourseDuration(courseInfo.duration)}</p>
                </div>

                <div className="course__info__description">
                    <p>{courseInfo.description}</p>
                </div>

                <div className="course__info__metadata" >
                    <p>
                        Course Id - {courseInfo.id}
                    </p>
                </div>

            </div>


        </div>
    )
}

export default CourseInfo