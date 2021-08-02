import React from "react";
import reasons from "./reason";
import ChooseCard from "./ChooseCard";

const WhyChooseUs = () => {
  return (
    <div className="reason-container">
      <div className="heading-text">
        <h1>
          <b>Why Choose Us All The Reason</b>
        </h1>
        <p>Create Community Larger, Earn Bigger</p>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row pt-3 container">
          {reasons.map((reason) => {
            return <ChooseCard reason={reason} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
