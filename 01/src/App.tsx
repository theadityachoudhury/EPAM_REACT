import { useLocation } from 'react-router';
import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import CourseInfo from './components/CourseInfo/CourseInfo';

function App() {

  const url: any = useLocation();
  const path = url.pathname.split('/');
  //check if the path is /courses/keys
  if (path[1] === 'course' && path[2].length > 0) {
    return (
      <>
        <Header />
        <CourseInfo />
      </>
    )
  }


  return (
    <>
      <Header />
      <Courses />
    </>
  )
}

export default App
