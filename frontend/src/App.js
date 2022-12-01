import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import LecturerPage from "./pages/LecturerPage";

function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lecturer" element={<LecturerPage />} />
     
        </Routes>
      </BrowserRouter>
  );
}

export default App;
