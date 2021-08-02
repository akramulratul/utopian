import React from "react";

const ChooseCard = ({ reason }) => {

  return (
    <div className="col-lg-4">
      <div className="reason-card">
        <div className="reason-icon">
          <img src={reason.icon} alt="" />
        </div>
        <div className="reason-card-text">
          <h4>
            <strong>{reason.title}</strong>
          </h4>
          <p>{reason.details}</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseCard;
