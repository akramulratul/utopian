import React from "react";
import Sidebar from "../../Sidebar";
import "../../../../styles/_incentive.scss";
import TopIncentive from "./TopIncentive";
import DashboardNav from "../../Dashboard/DashboardNav";

const Incentive = () => {
  return (
    <div class="row">
      <div class="col-sm-3">
        <Sidebar />
      </div>
      <div class="col-sm-9">
        <DashboardNav />
        <TopIncentive />
      </div>
    </div>
  );
};

export default Incentive;
