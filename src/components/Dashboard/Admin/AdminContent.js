import React from "react";
import DashboardNav from "../DashboardNav";
import Graph from "../Graph";
import AdminRightContent from "./AdminRightContent";

const AdminContent = () => {
  return (
    <div>
      <DashboardNav />
      <div className="dashboard-container py-5 px-4">
        <div className="row">
          <div className="col-lg-8 bg-white">
            {/* <Graph /> */}
          </div>
          <div className="col-lg-4 admin-right-area">
            <AdminRightContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
