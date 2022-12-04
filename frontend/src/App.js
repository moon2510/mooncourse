import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CourseSection from "./components/home/coursesection";
import About from "./pages/About";
import LecturerCoursePage from "./pages/LecturePage/LectureCoursePage";
import LecturerCreateCourse from "./pages/LecturePage/LectureCreateCourse";
import LecturerCourseDetail from "./pages/LecturePage/LecturerCourseDetail";

function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/about" element={<About />} />
          
          <Route path="/lecturer" element={<LecturerCoursePage />} />
          <Route path="/lecturer/createcourse" element={<LecturerCreateCourse />} />
          <Route path="/lecturer/course/:courseId" element={<LecturerCourseDetail />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
