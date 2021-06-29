import React from "react";
import DashboardNav from "../../../DashboardNav";
import AdminSidebar from "../DepositDetails/DepositDetails";
import DepositContent from "../DepositDetails/DepositContent";
const DepositDetails = () => {
  return (
    <div className="row mr-0">
      <div className="col-lg-3 p-0">
        <AdminSidebar />
      </div>
      <div className="col-lg-9 p-0 witdraw-background">
        <div>
          <DashboardNav />
        </div>
        <div>
          <DepositContent />
        </div>
      </div>
    </div>
  );
};

export default DepositDetails;
