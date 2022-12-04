import React from "react";

import SideBar from "../../components/lecturer/sidebar";

import CourseDetail from "../../components/lecturer/coursedetail";

const LecturerCourseDetail= () => {
  window.scrollTo(0, 0);
 
  return (
    <div>
      <SideBar/>
      <CourseDetail />

    </div>
  );
};

export default LecturerCourseDetail;
