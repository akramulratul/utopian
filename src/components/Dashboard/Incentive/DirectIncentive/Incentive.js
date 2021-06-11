import React from "react";
import Sidebar from "../../Sidebar";
import "../../../../styles/_incentive.scss";
import TopIncentive from "./TopIncentive";

const Incentive = () => {
  return (
    <div class="row">
      <div class="col-sm-3">
        <Sidebar />
      </div>
      <div class="col-sm-9">
        <h1>nav BAR</h1>
        <TopIncentive />
      </div>
    </div>
  );
};

export default Incentive;
