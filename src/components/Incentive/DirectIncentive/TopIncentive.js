import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../../styles/_incentive.scss";
import { getUserProfile } from "../../Redux/Actions/userAction";
const TopIncentive = () => {
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);
  const stopLoading = () => {
    setisLoading(false);
  };
  useEffect(() => {
    dispatch(getUserProfile());
    stopLoading();
  }, [dispatch]);
  const getProfile = useSelector((state) => state.getProfile);
  const { loading, error, userInfo } = getProfile;
  console.log(userInfo);

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
                Incentive
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="right-content d-flex align-items-center m-3 p-2 border-left">
        {
          isLoading ? <p>loading ...</p> : loading ? <p>loading ...</p> : <div className="px-3">
            <h2>৳{userInfo.incentiveIncome}</h2>
            <small>Current Incentive Balance</small>
          </div>
        }
        <div className="px-3">
          <Button className="withdraw-btn ml-5">
            <Link to="/dashboard">
              <p>Incentive Balance</p>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopIncentive;
