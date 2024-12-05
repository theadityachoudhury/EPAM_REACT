import { Course, CoursesActionTypes } from './types';
import { addCourse, deleteCourse, setCourses, setLoading } from './reducer';


export const setCoursesAction = (courses: Course[]) => setCourses(courses);

export const addCourseAction = (course: Course) => addCourse(course);

export const deleteCourseAction = (courseId: string) => deleteCourse(courseId);

export const setLoadingAction = (loading: boolean) => setLoading(loading);