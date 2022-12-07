import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/lecturerpage/createcourse.css";
import "../../styles/lecturerpage/coursedetail.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";

import { AiFillPlusCircle } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { VscBook } from "react-icons/vsc";

//Redux
import { useSelector } from "react-redux";
import { selectCourse } from "../.././redux/slices/courseSlice";
import { updateLessonDetail } from "../.././redux/slices/lessonSlice";

//name,description, level,  numberLesson, numberLearner, rating,  price, authorId
const CourseDetail = () => {
  const course = useSelector(selectCourse);
  const dispatch = useDispatch();

  const [lessonList, setLessonList] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

      //   window.location.href = "/lecture/";
      window.location.reload();
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const reduxLessonDetail = (lesson) => {
    dispatch(updateLessonDetail(lesson));
  };

  return (
    <div className="courseDetail">
      <div class="courses-container">
        <div class="course">
          <div class="course-preview">
            <h6>Course</h6>
            <h2>{course.name}</h2>

            <div className="infoCourse">
              <div className="itemInfo">
                <VscBook size={25} />
                <p>{course.numberLesson} lesson</p>
              </div>

              <div className="itemInfo">
                <FaUserFriends size={25} />
                <p>{course.numberLearner} learners</p>
              </div>
            </div>
          </div>
          <div class="course-info">
            <div class="flex-wrapper">
              <div class="single-chart">Description: {course.description}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap-createbutton">
        <div className="pageName">Lessons</div>
        <button
          onClick={handleShow}
          className="createButton courseCreateButton"
        >
          <div className="iconCreate">
            <AiFillPlusCircle size={28} color={"#fff"} />
          </div>
          <p>Lesson</p>
        </button>
      </div>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Lesson</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            </div>
            <Modal.Footer>
              <button className="secondarybutton" onClick={handleClose}>
                Close
              </button>
              <button type="submit">Create Lesson</button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>

      <div className="coursecontainer row">
        {lessonList.map((lesson) => (
          <div
            className="coursegrid col-lg-4 col-md-6 col-sm-6"
            key={lesson._id}
          >
            <div className="border-course courseCard">
              <div className="coursetext">
                <h3 className="coursename">
                  <VscBook size={25} />
                  <Link to={`/lesson/${lesson._id}`}>{lesson.name}</Link>
                </h3>

                <p>{course.numberLesson} lessons</p>
                <p>Difficulty: {course.level}</p>
              </div>
              <hr />
              <Link to={`/lecturer/lesson/${lesson._id}`}>
                <button
                  onClick={() => reduxLessonDetail(lesson)}
                  className="buttonLearnNow"
                >
                  Detail
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;
