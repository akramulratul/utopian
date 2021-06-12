import React from "react";
import Sidebar from "../../Dashboard/Sidebar";
import DashboardNav from "../../Dashboard/DashboardNav";
import TopIncentive from "../DirectIncentive/TopIncentive";
import IncentiveHistory from "./TeamHistory";

const TeamIncentive = () => {
  return (
    <div className="row m-0 p-0">
      <div className="col-lg-2 m-0 p-0">
        <Sidebar />
      </div>
      <div className="content-holder col-lg-10 m-0 p-0">
        <div className="dash-nav">
          <DashboardNav />
        </div>
        <TopIncentive />
        <IncentiveHistory />
      </div>
    </div>
  );
};

export default TeamIncentive;
