import React from "react";
import toggleIcon from "../../../image/icons/toggle nav icon.svg";
import { Link } from "react-router-dom";

const AddNav = () => {
  return (
    <div className="bg-white  px-4 py-3 d-flex justify-content-between">
      <div className="left-content d-flex align-content-between">
        <div className="toogle-b pr-3">
          <img src={toggleIcon} alt="" />
        </div>
        <div className="logo px-lg-5">
          <Link to="/">
            <h3>UtoPian</h3>
          </Link>
        </div>
      </div>
      <div className="right-content d-flex align-items-center">
        <div className="px-3">
          <h4>Remaining Time</h4>
        </div>
        <div className="d-flex">
          <div className="border border-1">
            <h4>0</h4>
          </div>
          <div className="ml-2 mr-2 border border-1">
            <h4>2</h4>
          </div>
        </div>
        <div className="mr-2">
          <h3>Seconds</h3>
        </div>
        <Link to="/earning">
          <div className="btn btn-brand pt-2 ml-lg-5">
            <h6>Close</h6>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AddNav;
