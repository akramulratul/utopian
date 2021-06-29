import React from "react";
import StepCard from "./StepCard";

const Steps = () => {
  return (
    <div className="container py-5">
      <div className="heading-text d-flex justify-content-center">
        <div className="text-center">
          <h2>
            <b>Try 4 Steps To Invest</b>
          </h2>
          <p className="py-2">
            You can easily get profit here. By follow this 4 steps and earned
            marvelous interest.
          </p>
        </div>
      </div>

      <StepCard className="py-4" />
    </div>
  );
};

export default Steps;
