import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import AllCourse from "../../components/learner/allcourseHome";
// import Footer from "./../components/Footer";

const HomePage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <AllCourse/>
      <Footer/>
      
    </div>
  );
};

export default HomePage;
