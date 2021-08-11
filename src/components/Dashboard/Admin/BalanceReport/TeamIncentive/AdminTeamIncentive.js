import React from "react";
import DashboardNav from "../../../DashboardNav";
import AdminSidebar from "../../AdminSidebar";
import AdminTeamIncentiveHstry from "./AdminTeamIncentiveHstry";
import AdminTopTeamIncentive from "./AdminTopTeamIncentive";

const AdminTeamIncentive = () => {
  return (
    <div className="row m-0 p-0">
      <div className="col-lg-3 m-0 p-0">
        <AdminSidebar />
      </div>
      <div className="content-holder col-lg-9 m-0 p-0 incentive-background">
        <div className="dash-nav">
          <DashboardNav />{" "}
        </div>
        <AdminTopTeamIncentive />
        <AdminTeamIncentiveHstry />
      </div>
    </div>
  );
};

export default AdminTeamIncentive;
