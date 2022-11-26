import React from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";
// import Pagination from "./pagination";
import courses from "../../data/Course";
import "../.././styles/coursesection.css"
import abf from "../../../src/statics/images/python.jpg"

const CourseSection= () => {
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="coursecontainer row">
                {courses.map((course) => (
                  <div
                    className="shop col-lg-4 col-md-6 col-sm-6"
                    key={course._id}
                  >
                    <div className="border-course courseCard" >
                      <Link to={`/courses/${course._id}`}>
                        <div className="shopBack">
                          <img src={course.image} alt={course.name} />
                        </div>
                      </Link>

                      <div className="coursetext">
                        <p>
                          <Link to={`/courses/${course._id}`}>
                            {course.name}
                          </Link>
                        </p>

                        <Rating
                          value={course.rating}
                          className="rating"
                        />
                        <p>{course.numberLesson} lessons</p>
                        <p>Difficulty: {course.level}</p>
                      </div>
                    </div>
                  </div>
                ))}
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseSection;
