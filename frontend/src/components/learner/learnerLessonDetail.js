import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
const LearnerLessonDetail = () => {
  const topic = useSelector(selectTopic);
  const { lessonId } = useParams();

  const [lesson, setLesson] = useState("");

  const fetchDataOneLesson = async () => {
    const result = await axiosConfig.get(
      `http://localhost:5000/lecturer/getOneLesson/${lessonId}`
    );
    setLesson(result.data);
  };

  useEffect(() => {
    fetchDataOneLesson();
  }, []);

  console.log("Lesson", lesson);

  if (lesson === "") {
    return <div></div>;
  }

  return (
    <div>
      <div className="coursedetail">
        <div class="course-preview">
          <h6>Topic</h6>
          <h2>{topic.name}</h2>
          <div className="descriptionLesson">{topic.description}</div>
        </div>
        <div
          style={{ padding: 50 }}
          dangerouslySetInnerHTML={{
            __html: lesson.knowledge,
          }}
        ></div>
      </div>
    </div>
  );
};

export default LearnerLessonDetail;
