import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";
import Rating from "../home/rating";
import axios from "axios";
import "../../styles/lecturerpage/lecturerpage.css";
import { useDispatch } from "react-redux";
import { updateCourseDetail } from "../.././redux/slices/courseSlice";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Modal from "react-bootstrap/Modal";
import CreateCourse from "../../components/lecturer/createcourse";

const LecturerCourseList = () => {
  const [courses, setCourses] = useState("");
  const authorId = localStorage.getItem("id");
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notify = () => toast("Wow so easy !");

  const fetchData = async () => {
    const result = await axios.get(
      `http://localhost:5000/lecturer/mycourse/${authorId}`
    );
    setCourses(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (courses === "") {
    return <div></div>;
  }

  const reduxCourseDetail = (course) => {
    dispatch(updateCourseDetail(course));
  };

  return (
    <div className="container">
      <div className="wrap-createbutton">
      <div className="pageName">Course</div>
        <button
          onClick={handleShow}
          className="createButton courseCreateButton"
        >
          <div className="iconCreate">
            <AiFillPlusCircle size={28} color={"#fff"} />
          </div>
          <p> Course</p>
        </button>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateCourse />
        </Modal.Body>
      </Modal>

      <div className="section">
        <div className="row">
          <div className="col-lg-12 col-md-12 article">
            <div className="coursecontainer row">
              {courses.map((course) => (
                <div
                  className="coursegrid col-lg-4 col-md-6 col-sm-6"
                  key={course._id}
                >
                  <div className="border-course courseCard">
                    <Link to={`/courses/${course._id}`}>
                      <div className="courseImage">
                        <img src={course.image} alt={course.name} />
                      </div>
                    </Link>

                    <div className="coursetext">
                      <h3 className="coursename">
                        <Link to={`/courses/${course._id}`}>{course.name}</Link>
                      </h3>

                      <Rating value={course.rating} className="rating" />
                      <p>{course.numberLesson} lessons</p>
                      <p>Difficulty: {course.level}</p>
                    </div>
                    <hr />
                    <div className="wrapButtonLearnNow">
                      <div className="price">
                        {course.price === 0 ? (
                          <div> Free </div>
                        ) : (
                          <div>
                            <RiMoneyDollarCircleFill
                              size={25}
                              color={"#2b8888"}
                            />{" "}
                            {course.price}{" "}
                          </div>
                        )}
                      </div>
                      <Link to={`/lecturer/course/${course._id}`}>
                        <button
                          onClick={() => reduxCourseDetail(course)}
                          className="buttonLearnNow"
                        >
                          Detail
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerCourseList;
