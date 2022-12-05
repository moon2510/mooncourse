import React from "react";
import { Link } from "react-router-dom";
import "../../styles/lecturerpage/sidebar.css";
import { FaUserAlt } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";
import { RiLogoutCircleRLine } from "react-icons/ri";

const SideBar = ({ mycourse, createcourse, dashboard }) => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div className="sidebar_wrap">
      <input type="checkbox" id="check" />

      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <div className="profileLecture">
          <div className="avtLec">
            <p className="avtLecture">
              <FaUserAlt size={25} color={"#2b8888"} />
            </p>
          </div>
          <p> {localStorage.getItem("name")}</p>
        </div>

        <Link to="/lecturer/" className={mycourse ? "active" : "inactive"}>
          <i className="fas fa-book-open"></i>
          <span>My Course</span>
        </Link>
        <Link
          to="/lecturer/createcourse"
          className={createcourse ? "active" : "inactive"}
        >
          <i className="fas fa-book-medical"></i>
          <span>Create Course</span>
        </Link>

        <Link
          to="/dashboard"
          className={dashboard ? "active" : "inactive"}
        >
          <i className="fas fa-qrcode"></i>
          <span>Dashboard</span>
        </Link>

        <Link
          to="/quiz"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <i className="fas fa-qrcode"></i>
          <span>Quiz</span>
        </Link>


        <div className="logoutLecture">
          <button onClick={logout}>
            <RiLogoutCircleRLine size={25} color={"#2b8888"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
