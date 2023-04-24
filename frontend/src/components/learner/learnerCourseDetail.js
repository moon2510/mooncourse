import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/lecturerpage/createcourse.css";
import "../../styles/learnerPage/learnerCourseDetail.css";

import { FaUserFriends } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { VscBook } from "react-icons/vsc";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { selectCourse } from "../.././redux/slices/courseSlice";
import { updateTopicDetail } from "../../redux/slices/topicSlice";
import { axiosConfig } from "../../apiService/axiosConfig";

//name,description, level,  numberLesson, numberLearner, rating,  price, authorId
const LearnerCourseDetail = (total) => {
  console.log("Total", total);
  const course = useSelector(selectCourse);
  console.log("CourseID", course);
  const dispatch = useDispatch();

  const [lessonList, setLessonList] = useState("");
  const [topicList, setTopicList] = useState("");

  const fetchDataTopic = async () => {
    const result = await axiosConfig.get(
      `http://localhost:5000/lecturer/gettopics/${course._id}`
    );
    console.log("Topic nè", result);
    setTopicList(result.data);
  };
  // const fetchDataLesson = async (lessonId) => {
  //   const result = await axiosConfig.get(
  //     `http://localhost:5000/lecturer/getLesson/${lessonId}`
  //   );
  //   setLessonList(result.data);
  // };

  const renderPayment = async () => {
    try {
      const res = await axiosConfig.post(
        `http://localhost:5000/transaction/createTransaction`,
        {
          ...course,
        }
      );
      console.log(res);
      window.location = res.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataTopic();
  }, [course._id]);

  console.log("Lesson", topicList);

  if (topicList === "") {
    return <div></div>;
  }

  const reduxLessonDetail = (lesson) => {
    dispatch(updateTopicDetail(lesson));
  };

  return (
    <div>
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

                <div className="gpBtn_detailCourse">
                  <button class="btn">Continue</button>
                  <button class="btn" onClick={renderPayment}>
                    Join
                  </button>
                </div>

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

          <button class="floating-btn">Get in Touch</button>
        </div>
        <div className="coursecontainer row">
          {topicList.map((topic) => (
            <div
              className="coursegrid col-lg-4 col-md-6 col-sm-6"
              key={topic._id}
            >
              <div className="border-course courseCard">
                <div className="coursetext">
                  <h3 className="coursename">
                    <VscBook size={25} />
                    <Link to={`/lesson/${topic._id}`}>{topic.name}</Link>
                  </h3>

                  <p>{course.numberLesson} lessons</p>
                  <p>Difficulty: {course.level}</p>
                </div>
                <hr />
                <Link to={`/lecturer/lesson/${topic._id}`}>
                  <button
                    onClick={() => reduxLessonDetail(topic)}
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
    </div>
  );
};

export default LearnerCourseDetail;
