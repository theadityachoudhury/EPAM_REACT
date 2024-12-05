import { Route, Routes } from 'react-router';
import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import CourseInfo from './components/CourseInfo/CourseInfo';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAuthors, getCourses } from './services';
import { setCoursesAction, setLoadingAction } from './store/courses/actions';
import { setAuthorsAction } from './store/authors/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const coursesData = await getCourses();
      const authorsData = await getAuthors();
      dispatch(setCoursesAction(coursesData));
      dispatch(setAuthorsAction(authorsData));
      dispatch(setLoadingAction(false));
    })()

  }, [dispatch]);
  return (
    <div className='m-auto'>
      <Header />
      <div className=''>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/' element={<Courses />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/course/:courseId' element={<CourseInfo />} />
          <Route path='/course/add' element={<CreateCourse />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
