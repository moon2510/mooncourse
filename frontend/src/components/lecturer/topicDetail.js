import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/lecturerpage/createcourse.css';
import '../../styles/lecturerpage/coursedetail.css';
import '../../styles/lecturerpage/lessonDetail.css';
import '../../styles/lecturerpage/topic-list.css';
import axios from 'axios';

import { ToastContainer } from 'react-toastify';
import NotifySuccess from '../toastify/success';

import { useDispatch } from 'react-redux';

import Modal from 'react-bootstrap/Modal';

import { AiFillPlusCircle } from 'react-icons/ai';
import { VscBook } from 'react-icons/vsc';
import { RiFileList2Fill } from 'react-icons/ri';

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
} from 'verbum';

//Redux
import { useSelector } from 'react-redux';
import { selectTopic } from '../../redux/slices/topicSlice';
import { axiosConfig } from '../../apiService/axiosConfig';

//name,description, level,  numberLesson, numberLearner, rating,  price, authorId
const TopicDetail = () => {
  const topic = useSelector(selectTopic);
  const [lessonList, setLessonList] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchData = async () => {
    const result = await axiosConfig.get(`http://localhost:5000/lecturer/getLessons/${topic._id}`);
    setLessonList(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [lesson, setLesson] = useState({
    name: '',
    knowledge: '',
    topicId: topic._id,
  });

  if (lessonList === '') {
    return <div></div>;
  }

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setLesson({ ...lesson, [name]: value });
  };

  const onSubmitEditor = () => {
    const editorLesson = document.querySelector('.ContentEditable__root').innerHTML;
    setLesson({ ...lesson, knowledge: editorLesson });
    console.log('Editor', editorLesson);
  };

  const createLessonSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/lecturer/createLesson', {
        ...lesson,
      });
      NotifySuccess('Create Lesson Successfully');
      fetchData();
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className='courseDetail'>
      <ToastContainer />
      <div class='course-preview'>
        <h6>Topic</h6>
        <h2>{topic.name}</h2>
        <div className='descriptionLesson'>{topic.description}</div>
      </div>

      <div className='wrap-createbutton'>
        <div className='pageName'>Lessons</div>
        <button onClick={handleShow} className='createButton courseCreateButton'>
          <div className='iconCreate'>
            <AiFillPlusCircle size={28} color={'#fff'} />
          </div>
          <p> Lesson</p>
        </button>
      </div>

      <Modal show={show} onHide={handleClose} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Lesson</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={createLessonSubmit} className='formCreateCourse formCreateLesson'>
            <div className='nameTopicInput'>
              <div className='name'>Name</div>
              <input
                type='text'
                name='name'
                required
                placeholder=''
                value={lesson.name}
                onChange={onChangeInput}
                className='inputtext'
              />
            </div>
            <EditorComposer>
              <Editor
                witdh='100px'
                heigth='100%'
                hashtagsEnabled={true}
                emojisEnabled={true}
                onChange={onSubmitEditor}
              >
                <ToolbarPlugin defaultFontSize='20px' heigth='100%' defaultBgColor='green'>
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
              <button type='button' className='secondarybutton' onClick={handleClose}>
                Close
              </button>
              <button type='submit' onClick={handleClose}>
                Create Lesson
              </button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>

      <div className='coursecontainer row'>
        {lessonList.map((lesson) => (
          <div className='coursegrid topic-list' key={lesson._id}>
            <div className='border-course courseCard'>
              <div className='coursetext'>
                <h3 className='coursename topicname'>
                  <Link to={`/lesson/${lesson._id}`}>
                    <RiFileList2Fill size={25} color='#379c9c' style={{ marginRight: 5 }} />
                    {lesson.name}
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicDetail;
