import React from "react";
import DashboardNav from "../../Dashboard/DashboardNav";
import Sidebar from "../../Dashboard/Sidebar";
import SalaryHistory from "./SalaryHistory";
import SalaryTop from "./SalaryTop";

const Salary = () => {
  return (
    <div className="row m-0 p-0">
      <div className="col-lg-3 col-md-3 col-sm-1 m-0 p-0">
        <Sidebar />
      </div>
      <div className="content-holder col-lg-9 col-md-9 col-sm-9 m-0 p-0 incentive-background">
        <div className="dash-nav">
          <DashboardNav />
        </div>
        <div>
          <SalaryTop />
        </div>
        <SalaryHistory />
      </div>
    </div>
  );
};

export default Salary;
