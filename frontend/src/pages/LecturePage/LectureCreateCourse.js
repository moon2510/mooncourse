import React from "react";

import SideBar from "../../components/lecturer/sidebar";

import CreateCourse from "../../components/lecturer/createcourse";
import Header from "../../components/lecturer/header";

const LecturerCreateCourse = () => {
  window.scrollTo(0, 0);
 
  return (
    <div>
      <SideBar createcourse={"true"} />
      <Header/>
      <CreateCourse />

    </div>
  );
};

export default LecturerCreateCourse;
