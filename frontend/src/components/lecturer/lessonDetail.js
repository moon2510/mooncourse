import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/lecturerpage/createcourse.css";
import "../../styles/lecturerpage/coursedetail.css";
import "../../styles/lecturerpage/lessonDetail.css";
import axios from "axios";
import { useDispatch } from "react-redux";

import Modal from "react-bootstrap/Modal";

import { AiFillPlusCircle } from "react-icons/ai";
import { VscBook } from "react-icons/vsc";
import { RiFileList2Fill } from "react-icons/ri";

//Editor
import {
  EditorComposer,
  Editor,
  ToolbarPlugin,
  AlignDropdown,
  BackgroundColorPicker,
  BoldButton,
  CodeFormatButton,
  FloatingLinkEditor,
  FontFamilyDropdown,
  FontSizeDropdown,
  InsertDropdown,
  InsertLinkButton,
  ItalicButton,
  TextColorPicker,
  TextFormatDropdown,
  UnderlineButton,
  Divider,
} from "verbum";

//Redux
import { useSelector } from "react-redux";
import { selectLesson } from "../.././redux/slices/lessonSlice";

//name,description, level,  numberLesson, numberLearner, rating,  price, authorId
const CourseDetail = () => {
  const lesson = useSelector(selectLesson);
  const dispatch = useDispatch();
  const [topicList, setTopicList] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchData = async () => {
    const result = await axios.get(
      `http://localhost:5000/lecturer/getTopic/${lesson._id}`
    );
    setTopicList(result.data);
  };

  const [topicItem, setTopicItem] = useState(topicList);

  useEffect(() => {
    fetchData();
  }, []);

  const [topic, setTopic] = useState({
    name: "",
    knowledge: "",
    lessonId: lesson._id,
  });

  if (topicList === "") {
    return <div></div>;
  }

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setTopic({ ...topic, [name]: value });
  };

  const onSubmitEditor = () => {
    const editorTopic = document.querySelector(
      ".ContentEditable__root"
    ).innerHTML;
    setTopic({ ...topic, knowledge: editorTopic });
    console.log("Editor", editorTopic);
  };

  const createTopicSubmit = async (e) => {
    // Cách fix bug, click 2 lần button create
    console.log("Ngu vcl", topic);

    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/lecturer/createTopic", {
        ...topic,
      });

      fetchData();
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="courseDetail">
      <div class="course-preview">
        <h6>Lesson</h6>
        <h2>{lesson.name}</h2>
        <div className="descriptionLesson">{lesson.description}</div>
      </div>
    
      <div className="wrap-createbutton">
        <div className="pageName">Topics</div>
        <button
          onClick={handleShow}
          className="createButton courseCreateButton"
        >
          <div className="iconCreate">
            <AiFillPlusCircle size={28} color={"#fff"} />
          </div>
          <p> Topic</p>
        </button>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Topic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={createTopicSubmit}
            className="formCreateCourse formCreateLesson"
          >
            <div className="nameTopicInput">
              <div className="name">Name</div>
              <input
                type="text"
                name="name"
                required
                placeholder=""
                value={topic.name}
                onChange={onChangeInput}
                className="inputtext"
              />
            </div>
            <EditorComposer>
              <Editor
                witdh="100px"
                heigth="100%"
                hashtagsEnabled={true}
                emojisEnabled={true}
                onChange={onSubmitEditor}
              >
                <ToolbarPlugin
                  defaultFontSize="20px"
                  heigth="100%"
                  defaultBgColor="green"
                >
                  <FontFamilyDropdown />
                  <FontSizeDropdown />
                  <Divider />
                  <BoldButton />
                  <ItalicButton />
                  <UnderlineButton />
                  <CodeFormatButton />
                  <InsertLinkButton />
                  <TextColorPicker />
                  <BackgroundColorPicker />
                  <TextFormatDropdown />
                  <Divider />
                  <InsertDropdown enablePoll={true} />
                  <Divider />
                  <AlignDropdown />
                </ToolbarPlugin>
              </Editor>
            </EditorComposer>

            <Modal.Footer>
              <button className="secondarybutton" onClick={handleClose}>
                Close
              </button>
              <button type="submit">Create Topic</button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>

      <div className="coursecontainer row">
        {topicList.map((topic) => (
          <div
            className="coursegrid col-lg-4 col-md-6 col-sm-6"
            key={lesson._id}
          >
            <div className="border-course courseCard">
              <div className="coursetext">
                <h3 className="coursename topicname">
                
                  <Link to={`/lesson/${lesson._id}`}>
                    <RiFileList2Fill size={25} color="#379c9c" />
                     {topic.name}
                  </Link>
                </h3>
                
                {/* {
                  <div
                    dangerouslySetInnerHTML={{
                      __html: topicList[0].knowledge,
                    }}
                  ></div>
                } */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;
