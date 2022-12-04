import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/lecturerpage/createcourse.css";
import axios from "axios";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { AiFillPhone, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook, BsGithub, BsYoutube } from "react-icons/bs";


//name,description, level,  numberLesson, numberLearner, rating,  price, authorId
const CreateCourse = () => {
  const [course, setCourse] = useState({
    name: "",
    description: "",
    level: "",
    price: "",
    authorId: localStorage.getItem("id"),
    image: "abcde",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };
  const createCourseSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/lecturer/createCourse", {
        ...course,
      });

      //   localStorage.setItem("checkLogin", true);

      window.location.href = "/lecture";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <div className="createCourse">
      <form onSubmit={createCourseSubmit} className="formCreateCourse">
        <div className="row">
          <div className="courseInput">
            <span>
              <input
                type="text"
                name="name"
                required
                placeholder=""
                value={course.name}
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
                value={course.description}
                onChange={onChangeInput}
                className="inputtext"
              />
              <label className="field" for="Description">
                Description
              </label>
            </span>
          </div>
          <div className="courseInput">
            <span>
              <input
                type="string"
                name="level"
                required
                placeholder=""
                value={course.level}
                onChange={onChangeInput}
                className="inputtext"
              />
              <label className="field" for="Level">
                Level
              </label>
            </span>
          </div>
          <div className="courseInput">
            <span>
              <input
                type="text"
                name="price"
                required
                placeholder=""
                value={course.price}
                onChange={onChangeInput}
                className="inputtext"
              />
              <label className="field" for="Level">
                Price
              </label>
            </span>
          </div>
          {/* <div className="courseInput">
            <input type="file" />
          </div> */}
          <button type="submit" className="buttonCreate">Create Course</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
