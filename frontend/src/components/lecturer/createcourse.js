import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/lecturerpage/createcourse.css";
import axios from "axios";
import { storage } from "../../../src/firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { ImUpload3 } from "react-icons/im";
import { ImLocation2 } from "react-icons/im";
import { AiFillPhone, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook, BsGithub, BsYoutube } from "react-icons/bs";
import { async } from "@firebase/util";

//name,description, level,  numberLesson, numberLearner, rating,  price, authorId
const CreateCourse = () => {
  const [course, setCourse] = useState({
    name: "",
    description: "",
    level: "",
    price: "",
    authorId: localStorage.getItem("id"),
    image: "",
  });

  //image firebase
  const uploadImage = async (file, name) => {
    try {
      if (!file) return null;
      const storageRef = ref(storage, `${file.name}`);

      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          setCourse({ ...course, [name]: downloadURL });
        });
      });
    } catch (error) {
      return error;
    }
  };
  const onChangeInput = async (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      const imageUpload = e.target.files[0];
      await uploadImage(imageUpload, name);
    } else {
      setCourse({ ...course, [name]: value });
    }
  };
  const createCourseSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/lecturer/createCourse", {
        ...course,
      });
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

          <div className="courseInput">
            <div className="iconUpload">
              <ImUpload3 size={25} color="379c9c" />
            </div>
            <input
              name="image"
              onChange={onChangeInput}
              type="file"
              accept="image/*"
              className="custom-file-input"
            />

            <label className="field" for="Image">
              Image
            </label>
          </div>
          <div className="wrap-createbutton">
            <button type="submit" className="courseCreateButton">
              <p> Create Course</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
