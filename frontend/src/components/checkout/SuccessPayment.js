import axios from "axios";
import React from "react";
import { DatePicker } from "antd";
import "./SuccessPayment.css";
import { Link } from "react-router-dom";
import { axiosConfig } from "../../apiService/axiosConfig";

function SuccessPayment() {
  const params = (p) => new URLSearchParams(window.location.search).get(p);
  React.useEffect(() => {
    const paymentSuccess = async () => {
      const courseId = params("courseId");
      const userId = await localStorage.getItem("id");

      try {
        await axiosConfig.post(
          "http://localhost:5000/transaction/activeCourse",
          {
            courseId,
            userId,
            isPaid: true,
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
    paymentSuccess();
  }, []);
  // useEffect
  return (
    <div className="success-noti">
      <div className="cookiesContent" id="cookiesPopup">
        <img
          src="https://sellcodes.com/assets/images/Purchase_Success.png"
          alt="cookies-img"
          style={{ width: "200px" }}
        />
        <h1>Payment Successfully</h1>
        <Link to={`/learner/course/${params("courseId")}`}>
          <button className="accept">OK</button>
        </Link>
      </div>
    </div>
  );
}

export default SuccessPayment;
