import React from "react";
import DashboardNav from "../Dashboard/DashboardNav";
import Sidebar from "../Dashboard/Sidebar";
import Advertise from "./Advertise";
import EarningBar from "./EarningBar";
import { ToastContainer } from "react-toastify";

const Earning = () => {
  return (
    <div className="row m-0 p-0">
      <div className="col-lg-3 m-0 p-0">
        <Sidebar />
      </div>
      <div className="content-holder col-lg-9 m-0 p-0 incentive-background">
        <div>
          <DashboardNav />
        </div>
        <div className="ml-2">
          <EarningBar />
        </div>
        <div className="ml-4 mt-3 mr-3">
          <Advertise />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Earning;
