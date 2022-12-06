import React from "react";

import SideBar from "../../components/lecturer/sidebar";

import LecturerCourseList from "../../components/lecturer/lecturercourse";
import Header from "../../components/lecturer/header";
import HeaderLearn from "../../components/header";

const LecturerCoursePage = () => {

  // if (localStorage.getItem("role") !== "lecturer" ){
  //   return (<div>
  //     <HeaderLearn/>
  //     <div>Bạn ko có quyền truy cập</div>
  //     <img src="https://help.fanruan.com/finereport-en/uploads/20201216/1608081223553006.png"/>
  //   </div>)
  // }

  window.scrollTo(0, 0);
 
  return (
    <div>
      <SideBar mycourse={"true"} />
      <Header/>
      <LecturerCourseList/>

    </div>
  );
};

export default LecturerCoursePage;
