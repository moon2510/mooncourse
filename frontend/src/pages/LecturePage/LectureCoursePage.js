import React from "react";

import SideBar from "../../components/lecturer/sidebar";

import LecturerCourseList from "../../components/lecturer/lecturercourse";
import Header from "../../components/lecturer/header";

const LecturerCoursePage = () => {
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
