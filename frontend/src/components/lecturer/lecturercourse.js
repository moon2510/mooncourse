import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";
import Rating from "../home/rating";
import axios from "axios";
import "../../styles/lecturerpage/lecturerpage.css"

const LecturerCourseList = () => {
  const [courses, setCourses] = useState("");
  const authorId = localStorage.getItem("id");

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

  return (
    <div className="container">
      <Link to={"/lecturer/createcourse"} className="wrap-createbutton">
        <div className="createButton courseCreateButton">
          <div className="iconCreate">
            <AiFillPlusCircle size={28} color={"#fff"} />
          </div>
          <p> Create</p>
        </div>
      </Link>
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
                    {/* <Link to={`/courses/${course._id}`}>
                      <div className="courseImage">
                        <img src={course.image} alt={course.name} />
                      </div>
                    </Link> */}

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
                      {[localStorage.setItem("courseID",course._id),localStorage.setItem("courseName",course.name)]}
                        <div className="buttonLearnNow">Detail</div>
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
