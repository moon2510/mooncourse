import React from "react";

import SideBar from "../../components/lecturer/sidebar";

import TopicDetail from "../../components/lecturer/topicDetail";
import Header from "../../components/lecturer/header";

const LecturerTopicDetail = () => {
  window.scrollTo(0, 0);

  return (
    <div>
      <SideBar createcourse={"true"} />
      <Header />
      <TopicDetail />
    </div>
  );
};

export default LecturerTopicDetail;
