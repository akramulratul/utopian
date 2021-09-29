import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile } from "../Redux/Actions/userAction";

const DepositTop = () => {
  const [isDeposit, SetDeposit] = useState(false);
  const getProfile = useSelector((state) => state.getProfile);
  const { userInfo } = getProfile;
  // console.log(userInfo)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);
  const ButtonHandler = () => {
    SetDeposit(!isDeposit);
    // console.log("isDeposit");
  };
  return (
    <div className="bg-white d-flex justify-content-between rounded mt-3 ml-lg-4 mr-lg-4">
      <div className="left-content d-flex align-items-center ">
        <div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white">
              <li class="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Deposit
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="right-content d-flex  align-items-center m-3 p-2 border-left">
        <div className="px-3">
          <h2>৳{(userInfo && userInfo.totalIncome) || "00"}</h2>
          <small>Available for Withdrawal</small>
        </div>
        <div className="px-3">
          {isDeposit ? (
            <Link to="/deposit">
              <Button
                className="Deposit-btn btn btn-brand w-100 py-2 mt-2"
                type="button"
                onClick={ButtonHandler}
              >
                <p>Back to Deposit History</p>
              </Button>
            </Link>
          ) : (
            <Link to="/depositnow">
              <Button
                className="Deposit-btn btn btn-brand w-100 py-2 mt-2"
                type="button"
                onClick={ButtonHandler}
              >
                <p>Deposit Now</p>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepositTop;
