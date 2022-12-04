import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/lecturerpage/createcourse.css";
import "../../styles/lecturerpage/coursedetail.css";
import axios from "axios";

import Popup from "reactjs-popup";
import { AiFillPlusCircle } from "react-icons/ai";

//name,description, level,  numberLesson, numberLearner, rating,  price, authorId
const CourseDetail = () => {
  const [lesson, setLesson] = useState({
    name: "",
    description: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setLesson({ ...lesson, [name]: value });
  };
  const createLessonSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/lecturer/createLesson", {
        ...lesson,
      });

      //   localStorage.setItem("checkLogin", true);

      window.location.href = "/lecture";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <div className="courseDetail">
      <div className="courseName">
        <p>Python Basics</p>
      </div>
      <Link to={"/lecturer/createcourse"} className="wrap-createbutton"></Link>
      <Popup
        modal
        trigger={
          <div className="wrap-createbutton">
            <div className="createButton courseCreateButton">
              <div className="iconCreate">
                <AiFillPlusCircle size={28} color={"#fff"} />
              </div>
              <p> Create</p>
            </div>
          </div>
        }
      >
        <form
          onSubmit={createLessonSubmit}
          className="formCreateCourse formCreateLesson"
        >
          <div className="row">
            <div className="courseInput">
              <span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder=""
                  value={lesson.name}
                  onChange={onChangeInput}
                  className="inputtext"
                />
                <label className="field" for="Name">
                  Name
                </label>
              </span>
            </div>
            <div className="courseInput">
              <span>
                <input
                  type="text"
                  name="description"
                  required
                  placeholder=""
                  value={lesson.description}
                  onChange={onChangeInput}
                  className="inputtext"
                />
                <label className="field" for="Description">
                  Description
                </label>
              </span>
            </div>

            <button type="submit" className="buttonCreate">
              Create Lesson
            </button>
          </div>
        </form>
      </Popup>
    </div>
  );
};

export default CourseDetail;
