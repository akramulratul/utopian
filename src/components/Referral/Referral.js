import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardNav from "../Dashboard/DashboardNav";
import Sidebar from "../Dashboard/Sidebar";
import { referralAction } from "../Redux/Actions/referralAction";
import Tree from "./Tree";

const Referral = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const referralHistory = useSelector((state) => state.getReferral);
  const { referralInfo, loading } = referralHistory;
  const stopLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    dispatch(referralAction());
    stopLoading();
  }, []);
  return (
    <div className="row m-0 p-0 ">
      <div className="col-lg-3 m-0 p-0">
        <Sidebar />
      </div>
      <div className="content-holder col-lg-9 m-0 p-0 Deposit-bg">
        <div>
          <DashboardNav />
        </div>
        <div className="ml-2">
          <div
            className="bg-white d-flex justify-content-between rounded mt-3
          ml-4 mr-4"
          >
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
                    <li class="breadcrumb-item active" aria-current="page">
                      Referral
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="right-content d-flex  align-items-center m-3 p-2">
              <div className="text-center mx-3">
                <h3>
                  {isLoading ? 0 : loading ? 0 : referralInfo.nextGens.length}
                </h3>
                <p className="text-secondary">Direct Referral</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-4 mt-3 mr-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <h3 className="my-4">Users under your referral link</h3>
              {referralInfo.nextGens.length !== 0 ? (
                <Tree data={referralInfo.nextGens} />
              ) : (
                <h6 className="bg-danger py-2 px-3 text-white rounded">
                  Currently no one has signed up with your referral link. Please
                  Share your referral link to get referral bonus.
                </h6>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Referral;
