import React from "react";
import Header from "../components/header";
import CourseSection from "../components/home/coursesection";
import Footer from "../components/footer";
import abf from "../statics/images/python.jpg"

// import Footer from "./../components/Footer";

const HomePage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <CourseSection/>
      <Footer/>
      
    </div>
  );
};

export default HomePage;
