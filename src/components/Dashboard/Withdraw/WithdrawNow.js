import React from "react";
import "../../../styles/_Withdraw.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const WithdrawNow = () => {
  const [isClicked, setIsClicked] = useState(false);

  const getProfile = useSelector((state) => state.getProfile);
  const { userInfo } = getProfile;
  const buttonClicked = () => {
    isClicked ? setIsClicked(false) : setIsClicked(true);
  };
  console.log(isClicked);
  return (
    <div className="header bg-white mt-3 mr-3 ml-3 d-flex justify-content-between rounded">
      <div className="left-content d-flex align-items-center ">
        <div className="pt-2">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white">
              <li class="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Withdrawal
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="right-content d-flex align-items-center m-3 p-2 border-left">
        <div className="px-3">
          <h2>৳{(userInfo && userInfo.totalIncome) || 0}</h2>
          <small>Availabale for Withdrawal</small>
        </div>
        <div className="px-3">
          {isClicked ? (
            <Link to="/payment-method">
              <button
                className="withdraw-btn btn btn-brand w-100 py-2 mt-2"
                onClick={buttonClicked}
              >
                <p>Back To Withdraw</p>
              </button>
            </Link>
          ) : (
            <Link to="/withdraw">
              <button
                onClick={buttonClicked}
                className="withdraw-btn btn btn-brand w-100 py-2 mt-2"
              >
                <p>Withdrawal History </p>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default WithdrawNow;
