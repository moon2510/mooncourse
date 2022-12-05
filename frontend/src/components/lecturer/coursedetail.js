import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/lecturerpage/createcourse.css";
import "../../styles/lecturerpage/coursedetail.css";
import axios from "axios";

import Popup from "reactjs-popup";
import { AiFillPlusCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectCourse } from "../.././redux/slices/courseSlice";

//name,description, level,  numberLesson, numberLearner, rating,  price, authorId
const CourseDetail = () => {
  const course = useSelector(selectCourse);

  const [lessonList, setLessonList] = useState("");

  const fetchData = async () => {
    const result = await axios.get(
      `http://localhost:5000/lecturer/getLesson/${course._id}`
    );
    setLessonList(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(lessonList);

  const [lesson, setLesson] = useState({
    name: "",
    description: "",
    courseId: course._id,
  });

  if (lessonList === "") {
    return <div></div>;
  }

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

      window.location.href = "/lecture/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <div className="courseDetail">
      <div className="courseName">
        <p>{course.name}</p>
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
      <div className="coursecontainer row">
              {lessonList.map((lesson) => (
                <div
                  className="coursegrid col-lg-4 col-md-6 col-sm-6"
                  key={lesson._id}
                >
                  <div className="border-course courseCard">

                    <div className="coursetext">
                      <h3 className="coursename">
                        <Link to={`/lesson/${lesson._id}`}>{lesson.name}</Link>
                      </h3>

                      <p>{course.numberLesson} lessons</p>
                      <p>Difficulty: {course.level}</p>
                    </div>
                    <hr />
                    <div className="wrapButtonLearnNow">
                      
                      ABCD
                    </div>
                  </div>
                </div>
              ))}
            </div>

    </div>
  );
};

export default CourseDetail;
