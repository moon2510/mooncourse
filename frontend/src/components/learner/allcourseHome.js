import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";
import Rating from "../home/rating";
import axios from "axios";
import "../../styles/lecturerpage/lecturerpage.css";
import { useDispatch } from "react-redux";
import { updateCourseDetail } from "../.././redux/slices/courseSlice";

import AOS from "aos";
import "aos/dist/aos.css";
import { axiosConfig } from "../../apiService/axiosConfig";

const AllCourse = () => {
  const [courses, setCourses] = useState([]);
  const authorId = localStorage.getItem("id");
  const dispatch = useDispatch();

  // const joinCourseSubmit = async (courseLearn) => {
  //   const transaction = {
  //     courseId: courseLearn._id,
  //     userId: localStorage.getItem("id"),
  //   };
  //   console.log("Trans", transaction);
  //   reduxCourseDetail(courseLearn);
  //   try {
  //     await axiosConfig.post(
  //       "http://localhost:5000/transaction/createTransaction",
  //       {
  //         ...transaction,
  //       }
  //     );
  //   } catch (err) {
  //     alert(err.response.data.msg);
  //   }
  // };

  const fetchData = async () => {
    const result = await axios.get(`http://localhost:5000/user/courseLearner`);
    console.log(result.data);
    setCourses(result.data);
  };

  useEffect(() => {
    fetchData();
    AOS.init();
  }, []);

  if (courses === "") {
    return <div></div>;
  }

  const reduxCourseDetail = (course) => {
    dispatch(updateCourseDetail(course));
  };

  return (
    <div className="container">
      <div className="section">
        <div className="row">
          <div className="col-lg-12 col-md-12 article">
            <div className="coursecontainer row">
              {courses.map((course) => (
                <div
                  className="coursegrid col-lg-4 col-md-6 col-sm-6"
                  key={course._id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="border-course courseCard">
                    <Link to={`/home/learner/course/${course._id}`}>
                      <div className="courseImage">
                        <img src={course.image} alt={course.name} />
                      </div>
                    </Link>

                    <div className="coursetext">
                      <h3 className="coursename">
                        <Link to={`/home/learner/course/${course._id}`}>
                          {course.name}
                        </Link>
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
                      <Link to={`/home/learner/course/${course._id}`}>
                        <button className="buttonLearnNow">Learn Now</button>
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

export default AllCourse;
