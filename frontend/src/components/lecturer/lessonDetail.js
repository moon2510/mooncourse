import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/lecturerpage/createcourse.css';
import '../../styles/lecturerpage/coursedetail.css';
import '../../styles/lecturerpage/lessonDetail.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import Modal from 'react-bootstrap/Modal';

import { AiFillPlusCircle } from 'react-icons/ai';
import { VscBook } from 'react-icons/vsc';
import { RiFileList2Fill } from 'react-icons/ri';

//Redux
import { useSelector } from 'react-redux';
import { selectTopic } from '../.././redux/slices/topicSlice';

//name,description, level,  numberLesson, numberLearner, rating,  price, authorId
const LessonDetail = () => {
  const topic = useSelector(selectTopic);
  const [lessonList, setLessonList] = useState('');

  const [lessonItem, setLessonItem] = useState(lessonList);

  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  console.log('lessonLisst', lessonList);
  if (lessonList === '') {
    return <div></div>;
  }

  return (
    <div className='courseDetail'>
      <div class='course-preview'>
        <h6>Topic</h6>
        <h2>{topic.name}</h2>
        <div className='descriptionLesson'>{topic.description}</div>
      </div>

      <div className='coursecontainer row'>
        {lessonList.map((lesson) => (
          <div className='coursegrid col-lg-4 col-md-6 col-sm-6' key={topic._id}>
            <div className='border-course courseCard'>
              <div className='coursetext'>
                <h3 className='coursename'>
                  <Link to={`/topic/${topic._id}`}>
                    <RiFileList2Fill size={25} color='#379c9c' />
                    {lesson.name}
                  </Link>
                </h3>

                <p>Knowledge: {lesson.knowledge}</p>
                {
                  <div
                    dangerouslySetInnerHTML={{
                      __html: lesson.knowledge,
                    }}
                  ></div>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonDetail;
