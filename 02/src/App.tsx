import { Route, Routes } from 'react-router';
import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import CourseInfo from './components/CourseInfo/CourseInfo';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CourseForm from './components/CourseForm/CourseForm';
import Masonry from './components/Masonry/Masonry';

function App() {
  const columns = {
    xs: 2,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 4,
    xxl: 5,
  };

  const data = [
    { src: "https://picsum.photos/300/" },
    { src: "https://picsum.photos/400/" },
    { src: "https://picsum.photos/300/" },
    { src: "https://picsum.photos/500/" },
    { src: "https://picsum.photos/300/" },
    { src: "https://picsum.photos/450/700" },
    { src: "https://picsum.photos/600/800" },
    { src: "https://picsum.photos/800/600" },
    { src: "https://picsum.photos/400/500" },
    { src: "https://picsum.photos/500/300" },
    { src: "https://picsum.photos/300/450" },
    { src: "https://picsum.photos/700/450" },
  ];

  return (
    <div className='m-auto'>
      <Header />
      <div className=''>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Courses />} />
          <Route path='/course/:courseId' element={<CourseInfo />} />
          <Route path='/course/add' element={<CourseForm />} />
          <Route path='/masonry' element={<Masonry data={data} column={columns} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
