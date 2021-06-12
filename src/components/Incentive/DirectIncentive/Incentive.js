import React from "react";
import Sidebar from "../../Dashboard/Sidebar";
import TopIncentive from "../../Incentive/DirectIncentive/TopIncentive";
import DashboardNav from "../../Dashboard/DashboardNav";
import "../../../styles/_incentive.scss";
import IncentiveHistory from "../../Incentive/DirectIncentive/IncentiveHistory";

const Incentive = () => {
  return (
    <div className="row m-0 p-0">
      <div className="col-lg-2 m-0 p-0">
        <Sidebar />
      </div>
      <div className="content-holder col-lg-10 m-0 p-0 incentive-background">
        <div className="dash-nav">
          <DashboardNav />
        </div>
        <TopIncentive />
        <IncentiveHistory />
      </div>
    </div>
  );
};

export default Incentive;
