import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/LearnerPage/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CourseSection from "./components/home/coursesection";
import About from "./pages/About";
import LecturerCoursePage from "./pages/LecturePage/LectureCoursePage";
import LecturerCreateCourse from "./pages/LecturePage/LectureCreateCourse";
import LecturerCourseDetail from "./pages/LecturePage/LecturerCourseDetail";
import LecturerLessonDetail from "./pages/LecturePage/LecturerLessonDetail";
import LearnerCourseDetail from "./components/learner/learnerCourseDetail";
import ErrorPayment from "./components/checkout/ErrorPayment";
import SuccessPayment from "./components/checkout/SuccessPayment";

function App() {
  const firstLogin = localStorage.getItem("checkLogin");
  return (
    <BrowserRouter>
      <Routes>
        {firstLogin && localStorage.getItem("role") === "lecturer" ? (
          <>
            <Route path="/lecturer/" element={<LecturerCoursePage />} />
            <Route
              path="/lecturer/createcourse"
              element={<LecturerCreateCourse />}
            />
            <Route
              path="/lecturer/course/:courseId"
              element={<LecturerCourseDetail />}
            />
            <Route
              path="/lecturer/topic/:topicId"
              element={<LecturerLessonDetail />}
            />
            <Route path="/errorPayment" element={<ErrorPayment />} />
            <Route path="/successPayment" element={<SuccessPayment />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/home/learner/course/:courseId"
          element={<LearnerCourseDetail />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
