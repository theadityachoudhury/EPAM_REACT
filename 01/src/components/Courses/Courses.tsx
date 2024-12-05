import { mockedAuthorsList, mockedCoursesList } from "../../constants"
import { formatCreationDate } from "../../helpers/formatCreationDate"
import { getAuthorsname } from "../../helpers/getAuthorsname"
import { getCourseDuration } from "../../helpers/getCourseDuration"
import EmptyCourseList from "../EmptyCourseList/EmptyCourseList"
import CourseCard from "./components/CourseCard/CourseCard"

const Courses = () => {
    if (mockedCoursesList.length === 0) { 
        return <EmptyCourseList />
    }
    return (
        <div className="m-10 space-y-10">
            {mockedCoursesList.map((course) => {
                return <CourseCard key={course.id} id={course.id} title={course.title} description={course.description} creationDate={formatCreationDate(course.creationDate)} duration={getCourseDuration(course.duration)} authors={getAuthorsname(course.authors, mockedAuthorsList)} />
            })}
        </div>
    )
}

export default Courses