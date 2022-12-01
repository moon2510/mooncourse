import React from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";
// import Pagination from "./pagination";
import courses from "../../data/Course";
import "../.././styles/coursesection.css";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const CourseSection = () => {

  return (
    <>
      <div className="container">
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
                          <Link to={`/courses/${course._id}`}>
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
                          {course.price === 0 ? <div> Free </div> : <div><RiMoneyDollarCircleFill size={25} color={"#2b8888"}/> {course.price} </div>}
                        </div>
                        <Link to={`/courses/${course._id}`}>
                          <div class="buttonLearnNow">Learn Now</div>
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
    </>
  );
};

export default CourseSection;
