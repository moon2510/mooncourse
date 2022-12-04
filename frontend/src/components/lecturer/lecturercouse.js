import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const LecturerCourseList = () => {
  const [courses, setCourses] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/lecturer/mycourse")
      setCourses(result);
    }
    fetchData();
  }, []);
  console.log("04/12", courses);
  console.log("Bùi Thị");

  return (
    <div className="ạnhdh">
      abcd
      <h2>SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS</h2>
    </div>
  );
};

export default LecturerCourseList;
