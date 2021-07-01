import React from "react";
import { useDispatch, useSelector } from "react-redux";

const EarningBar = () => {
  const userGetAds = useSelector((state) => state.userGetAds);
  const { loading, allAds } = userGetAds;

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
                Earning
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="right-content d-flex align-items-center m-3 p-2">
        <div className="px-3">
          <h2>৳100</h2>
          <small>Today Earning</small>
        </div>
        <div className="px-3">
          <h2>{allAds && allAds.length}</h2>
          <small>Available Ads</small>
        </div>
      </div>
    </div>
  );
};

export default EarningBar;
