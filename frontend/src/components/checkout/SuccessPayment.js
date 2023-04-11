import React from "react";

function SuccessPayment() {
  // useEffect
  const params = (p) => new URLSearchParams(window.location.search).get(p);
  console.log(params("courseId"));
  return (
    <div>
      <a>success Payment</a>
    </div>
  );
}

export default SuccessPayment;
