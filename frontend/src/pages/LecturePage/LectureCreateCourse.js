import React from "react";

import SideBar from "../../components/lecturer/sidebar";

import CreateCourse from "../../components/lecturer/createcourse";

const LecturerCreateCourse = () => {
  window.scrollTo(0, 0);
 
  return (
    <div>
      <SideBar createcourse={"true"} />
      <CreateCourse />

    </div>
  );
};

export default LecturerCreateCourse;
