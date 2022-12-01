import React from "react";
import { useState } from "react";
import Header from "../components/header";
import CreateLessonDetail from "../components/lecturer/createlesson";
import Display from "../components/lecturer/displaylesson";
import Footer from "../components/footer";

const LecturerPage = () => {
  window.scrollTo(0, 0);
  const [content, setContent] = useState('')
  return (
    <div>
      <Header/>
      <CreateLessonDetail setContent={setContent} />
      <Display content={content} />
      <Footer/>
    </div>
  );
};

export default LecturerPage;
