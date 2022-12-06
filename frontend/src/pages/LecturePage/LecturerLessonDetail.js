import React from "react";

import SideBar from "../../components/lecturer/sidebar";

import LessonDetail from "../../components/lecturer/lessonDetail";
import Header from "../../components/lecturer/header";

const LecturerLessonDetail= () => {
  window.scrollTo(0, 0);
 
  return (
    <div>
      <SideBar createcourse={"true"}/>
      <Header/>
      <LessonDetail />

    </div>
  );
};

export default LecturerLessonDetail;
