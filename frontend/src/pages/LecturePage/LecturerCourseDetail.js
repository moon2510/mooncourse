import React from "react";

import SideBar from "../../components/lecturer/sidebar";

import CourseDetail from "../../components/lecturer/coursedetail";
import Header from "../../components/lecturer/header";

const LecturerCourseDetail= () => {
  window.scrollTo(0, 0);
 
  return (
    <div>
      <SideBar createcourse={"true"}/>
      <Header/>
      <CourseDetail />

    </div>
  );
};

export default LecturerCourseDetail;
