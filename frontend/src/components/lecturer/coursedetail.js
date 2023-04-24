import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/lecturerpage/createcourse.css';
import '../../styles/lecturerpage/coursedetail.css';
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Rating from '../home/rating';

import { AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { RiFileEditFill } from 'react-icons/ri';
import { VscBook } from 'react-icons/vsc';
import { BiTime } from 'react-icons/bi';

//Redux
import { useSelector } from 'react-redux';
import { selectCourse } from '../.././redux/slices/courseSlice';
import { updateTopicDetail } from '../../redux/slices/topicSlice';
import { axiosConfig } from '../../apiService/axiosConfig';

//name,description, level,  numberLesson, numberLearner, rating,  price, authorId
const CourseDetail = () => {
  const course = useSelector(selectCourse);
  const dispatch = useDispatch();

  const initialValForm = {
    name: '',
    description: '',
    courseId: course._id,
    status: 'create',
  };

  const [topicList, setTopicList] = useState('');

  const [showCreateModal, setShowCreateModal] = useState(false);
  const handleClose = () => setShowCreateModal(false);
  const handleCreate = () => {
    setShowCreateModal(true);
    setTopic(initialValForm);
  };

  const fetchData = async () => {
    //get topics
    const result = await axiosConfig.get(`http://localhost:5000/lecturer/getTopics/${course._id}`);
    setTopicList(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(topicList);

  const editTopic = (dtop) => {
    setShowCreateModal(true);
    if (dtop) {
      setTopic({ status: 'edit', ...dtop });
    }
  };

  const deleteTopic = (del) => {
    setShowCreateModal(true);
    if (del) {
      setTopic({ status: 'delete', ...del });
    }
  };

  const [topic, setTopic] = useState(initialValForm);

  console.log(topic);

  if (topicList === '') {
    return <div></div>;
  }

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setTopic({ ...topic, [name]: value });
  };
  const createTopicSubmit = async (e) => {
    e.preventDefault();
    try {
      if (topic.status === 'create') {
        await axiosConfig.post('http://localhost:5000/lecturer/create_topic', {
          ...topic,
        });
      } else if (topic.status === 'edit') {
        await axiosConfig.put('http://localhost:5000/lecturer/update_topic', {
          ...topic,
        });
      } else {
        await axiosConfig.post('http://localhost:5000/lecturer/delete_topic', {
          ...topic,
        });
      }

      //   localStorage.setItem("checkLogin", true);

      //   window.location.href = "/lecture/";
      window.location.reload();
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const reduxTopicDetail = (topic) => {
    dispatch(updateTopicDetail(topic));
  };

  return (
    <div className='courseDetail'>
      <div className='bannerCourse'>
        <div class='course-preview'>
          <h6>Course</h6>
          <h2>{course.name}</h2>
          <Rating value={course.rating} className='rating' />
          <div className='infoCourse'>
            <div className='itemInfo'>
              <VscBook size={25} />
              <p>{course.numberLesson} lesson</p>
            </div>

            <div className='itemInfo'>
              <FaUserFriends size={25} />
              <p>{course.numberLearner} learners</p>
            </div>
            <div className='itemInfo'>
              <BiTime size={25} />
              <p>{course.numberLearner} hours</p>
            </div>
          </div>
        </div>
        <div className='imgCourse'>
          <img src={course.image} alt={course.name} />
        </div>
      </div>
      <div className='descriptionWrap'>
        <p>Description</p>
        <div className='descriptionFlex'>
          <div className='description'>{course.description}</div>
        </div>
      </div>

      <div className='wrap-createbutton'>
        <div className='pageName'>Topics</div>
        <button onClick={handleCreate} className='createButton courseCreateButton'>
          <div className='iconCreate'>
            <AiFillPlusCircle size={28} color={'#fff'} />
          </div>
          <p>Topic</p>
        </button>
      </div>
      <Modal show={showCreateModal} onHide={handleClose} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {topic.status === 'delete'
              ? 'Delete Topic'
              : topic.status === 'edit'
              ? 'Edit Topic'
              : 'Create Topic'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {topic.status === 'delete' ? (
            <p>Do you want to delete ?</p>
          ) : (
            <form onSubmit={createTopicSubmit} className='formCreateCourse formCreateLesson'>
              <div className='row'>
                <div className='courseInput'>
                  <span>
                    <input
                      type='text'
                      name='name'
                      required
                      placeholder=''
                      value={topic.name}
                      onChange={onChangeInput}
                      className='inputtext'
                    />
                    <label className='field' for='Name'>
                      Name
                    </label>
                  </span>
                </div>
                <div className='courseInput'>
                  <span>
                    <input
                      type='text'
                      name='description'
                      required
                      placeholder=''
                      value={topic.description}
                      onChange={onChangeInput}
                      className='inputtext'
                    />
                    <label className='field' for='Description'>
                      Description
                    </label>
                  </span>
                </div>
              </div>
            </form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button className='secondarybutton' onClick={handleClose}>
            Close
          </button>
          <button
            type={topic.status === 'delete' ? 'button' : 'submit'}
            onClick={createTopicSubmit}
          >
            {topic.status === 'delete' ? 'Delete' : topic.status === 'edit' ? 'Edit' : 'Create'}
          </button>
        </Modal.Footer>
      </Modal>

      <div className='coursecontainer row'>
        {topicList.map((topic) => (
          <div className='coursegrid col-lg-4 col-md-6 col-sm-6' key={topic._id}>
            <div className='border-course courseCard'>
              <div className='coursetext'>
                <h3 className='coursename'>
                  <VscBook size={25} color='#379c9c' />
                  <Link to={`/lecturer/topic/${topic._id}`}>{topic.name}</Link>
                </h3>

                <p>{course.numberLesson} topics</p>
              </div>
              <hr />
              <Link to={`/lecturer/topic/${topic._id}`}>
                <button onClick={() => reduxTopicDetail(topic)} className='buttonLearnNow'>
                  Detail
                </button>
              </Link>
              <button
                className='editButton'
                onClick={() =>
                  editTopic({
                    name: topic.name,
                    description: topic.description,
                    topicId: topic._id,
                  })
                }
              >
                <RiFileEditFill color='#379c9c' size={25} />
              </button>
              <button
                style={{ backgroundColor: 'white' }}
                className='deleteButton'
                onClick={() => deleteTopic({ topicId: topic._id })}
              >
                <AiFillDelete color='#379c9c' size={25} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;
