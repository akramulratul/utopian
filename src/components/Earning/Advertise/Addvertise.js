import React from "react";
const Addvertise = ({ adDetails }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img className="w-75" src={adDetails.thumbnailImage} alt="" />
    </div>
  );
};

export default Addvertise;
