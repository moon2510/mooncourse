// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "../../styles/lecturerpage/createcourse.css";
// import "../../styles/lecturerpage/coursedetail.css";
// import "../../styles/lecturerpage/lessonDetail.css";
// import axios from "axios";
// import { useDispatch } from "react-redux";

// import Modal from "react-bootstrap/Modal";

// import { AiFillPlusCircle } from "react-icons/ai";
// import { VscBook } from "react-icons/vsc";
// import { RiFileList2Fill } from "react-icons/ri";

// //Redux
// import { useSelector } from "react-redux";
// import { selectLesson } from "../.././redux/slices/lessonSlice";

// //name,description, level,  numberLesson, numberLearner, rating,  price, authorId
// const TopicDetail = () => {
//   const lesson = useSelector(selectLesson);
//   const [topicList, setTopicList] = useState("");

//   const [topicItem, setTopicItem] = useState(topicList);

//   useEffect(() => {
//     fetchData();
//   }, []);


//   if (topicList === "") {
//     return <div></div>;
//   }

 
//   return (
//     <div className="courseDetail">
//       <div class="course-preview">
//         <h6>Lesson</h6>
//         <h2>{lesson.name}</h2>
//         <div className="descriptionLesson">{lesson.description}</div>
//       </div>

//       <div className="coursecontainer row">
//         {topicList.map((topic) => (
//           <div
//             className="coursegrid col-lg-4 col-md-6 col-sm-6"
//             key={lesson._id}
//           >
//             <div className="border-course courseCard">
//               <div className="coursetext">
//                 <h3 className="coursename">
//                   <Link to={`/lesson/${lesson._id}`}>
//                     <RiFileList2Fill size={25} color="#379c9c" />
//                     {topic.name}
//                   </Link>
//                 </h3>

//                 <p>Knowledge: {topic.knowledge}</p>
//                 {
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html: topic.knowledge,
//                     }}
//                   ></div>
//                 }
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopicDetail;
