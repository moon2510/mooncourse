import React from "react";
import Header from "../components/header";
import HeaderUser from "../components/headerUser";
import CourseSection from "../components/home/coursesection";
import Footer from "../components/footer";
// import Footer from "./../components/Footer";

const HomePage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      {/* <HeaderUser /> */}
      <CourseSection/>
      <Footer/>
      
    </div>
  );
};

export default HomePage;
