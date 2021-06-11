import React from "react";
import "../../../styles/_Withdraw.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const WithdrawNow = () => {
  const [isClicked, setIsClicked] = useState(false);
  const buttonClicked = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <h6>Dashboard /Withdrawal</h6>
        </div>
        <div class="col-sm-4 d-flex ">
          <h4>$220</h4>
          <button onClick={buttonClicked} className="withdraw-btn ml-5">
            {isClicked ? (
              <Link to="/payment-method">
                <p>Back To Withdraw</p>
              </Link>
            ) : (
              <Link to="/withdraw">
                <p>Withdrawal Now</p>
              </Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawNow;
