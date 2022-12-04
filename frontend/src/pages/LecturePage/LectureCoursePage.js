import React from "react";

import SideBar from "../../components/lecturer/sidebar";

import LecturerCourseList from "../../components/lecturer/lecturercouse";

const LecturerCoursePage = () => {
  window.scrollTo(0, 0);
 
  return (
    <div>
      <SideBar mycourse={"true"} />
      <LecturerCourseList/>

    </div>
  );
};

export default LecturerCoursePage;
