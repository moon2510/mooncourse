import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/lecturerpage/createcourse.css";
import "../../styles/learnerPage/learnerCourseDetail.css";

import { FaUserFriends } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { VscBook } from "react-icons/vsc";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { selectTopic, updateTopicDetail } from "../../redux/slices/topicSlice";
import { axiosConfig } from "../../apiService/axiosConfig";

//name,description, level,  numberLesson, numberLearner, rating,  price, authorId
const LearnerTopicDetail = () => {
  const topic = useSelector(selectTopic);

  const dispatch = useDispatch();

  const [lessonList, setLessonList] = useState("");

  const fetchDataLesson = async () => {
    const result = await axiosConfig.get(
      `http://localhost:5000/lecturer/getLessons/${topic._id}`
    );
    setLessonList(result.data);
  };

  useEffect(() => {
    fetchDataLesson();
  }, [topic._id]);

  console.log("Lesson", lessonList);

  if (lessonList === "") {
    return <div></div>;
  }

  const reduxTopicDetail = (topic) => {
    dispatch(updateTopicDetail(topic));
  };

  return (
    <div>
      <div className="coursedetail">
        <div class="course-preview">
          <h6>Topic</h6>
          <h2>{topic.name}</h2>
          <div className="descriptionLesson">{topic.description}</div>
        </div>

        <div className="coursecontainer row">
          {lessonList.map((lesson) => (
            <div className="coursegrid " key={lesson._id}>
              <div className="border-course courseCard">
                <div className="coursetext">
                  <h3 className="coursename">
                    <VscBook size={25} />
                    <Link
                      to={`/home/learner/course/topic/lesson/${lesson._id}`}
                    >
                      {lesson.name}
                    </Link>
                  </h3>
                </div>
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnerTopicDetail;
