import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/lecturerpage/createcourse.css";
import "../../styles/learnerPage/learnerCourseDetail.css";
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
const LearnerCourseDetail = (total) => {
  console.log("Total",total);
  const course = useSelector(selectCourse);
  const dispatch = useDispatch();

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

  if (lessonList === "") {
    return <div></div>;
  }

  const reduxLessonDetail = (lesson) => {
    dispatch(updateLessonDetail(lesson));
  };

  return (
    // <div className="courseDetail">
    //   <div class="courses-container">
    //     <div class="course">
    //       <div class="course-preview">
    //         <h6>Course</h6>
    //         <h2>{course.name}</h2>
    //         {/* <a href="#">
    //               View all chapters <i class="fas fa-chevron-right"></i>
    //             </a> */}

    //         <button class="btn">Continue</button>

    //         <div className="infoCourse">
    //           <div className="itemInfo">
    //             <VscBook size={25} />
    //             <p>{course.numberLesson} lesson</p>
    //           </div>

    //           <div className="itemInfo">
    //             <FaUserFriends size={25} />
    //             <p>{course.numberLearner} learners</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="course-info">
    //         <div class="flex-wrapper">
    //           <div class="single-chart">
    //             <svg viewBox="0 0 36 36" class="circular-chart orange">
    //               <path
    //                 class="circle-bg"
    //                 d="M18 2.0845
    //       a 15.9155 15.9155 0 0 1 0 31.831
    //       a 15.9155 15.9155 0 0 1 0 -31.831"
    //               />
    //               <path
    //                 class="circle"
    //                 stroke-dasharray={"40,100"}
    //                 d="M18 2.0845
    //       a 15.9155 15.9155 0 0 1 0 31.831
    //       a 15.9155 15.9155 0 0 1 0 -31.831"
    //               />
    //               <text x="18" y="20.35" class="percentage">
    //                 30%
    //               </text>
    //             </svg>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="coursecontainer row">
    //     {lessonList.map((lesson) => (
    //       <div
    //         className="coursegrid col-lg-4 col-md-6 col-sm-6"
    //         key={lesson._id}
    //       >
    //         <div className="border-course courseCard">
    //           <div className="coursetext">
    //             <h3 className="coursename">
    //               <VscBook size={25} />
    //               <Link to={`/lesson/${lesson._id}`}>{lesson.name}</Link>
    //             </h3>

    //             <p>{course.numberLesson} lessons</p>
    //             <p>Difficulty: {course.level}</p>
    //           </div>
    //           <hr />
    //           <Link to={`/lecturer/lesson/${lesson._id}`}>
    //             <button
    //               onClick={() => reduxLessonDetail(lesson)}
    //               className="buttonLearnNow"
    //             >
    //               Detail
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="coursedetail">
      <div className="banner">
        <div class="courses-container">
          <div class="course">
            <div class="course-preview">
              <h6>Course</h6>
              <h2>{course.name}</h2>
              {/* <a href="#">
              View all chapters <i class="fas fa-chevron-right"></i>
            </a> */}

              <button class="btn">Continue</button>

              <div className="infoCourse">
                <div className="itemInfo">
                  <BiTimeFive size={25} />
                  <p>{course.hour} hours</p>
                </div>
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
                <div class="single-chart">
                  <svg viewBox="0 0 36 36" class="circular-chart orange">
                    <path
                      class="circle-bg"
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      class="circle"
                      stroke-dasharray={"50,100"}
                      d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">
                      30%
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
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
          <div class="lesson-container">
            <div class="lesson">
              <h2>1. Introduction Python</h2>
              <h3>Giới thiệu ngắn gọn về python</h3>
              <div className="buttonWrap">
                <button className="btn detailButton">Detail</button>
              </div>
              <div className="listLesson">
                <div className="buttonWrap">
                  <Link to={`/cart/`}>
                    <button className="lessonButton">
                      Tổng quan về python
                    </button>
                  </Link>
                </div>
                <div className="buttonWrap">
                  <button className="lessonButton">
                    Chương trình Python đầu tiên
                  </button>
                </div>
                <div className="buttonWrap ">
                  <button className="lessonButton">Code "Hello World"</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="lesson-container">
            <div class="lesson">
              <h2>2. Làm quen với Python</h2>
              <h3>Bắt đầu làm quen với ngôn ngữ python</h3>

              <div className="buttonWrap">
                <button className="btn detailButton">Detail</button>
              </div>
              <div className="listLesson">
                <div className="buttonWrap">
                  <Link to={`/courses/`}>
                    <button className="lessonButton">
                      Tổng quan về python
                    </button>
                  </Link>
                </div>
                <div className="buttonWrap">
                  <button className="lessonButton">
                    Chương trình Python đầu tiên
                  </button>
                </div>
                <div className="buttonWrap ">
                  <button className="lessonButton">Code "Hello World"</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="floating-btn">Get in Touch</button>
      </div>
    </div>
  );
};

export default LearnerCourseDetail;
