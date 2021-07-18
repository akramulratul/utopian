import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar";
import DashboardNav from "../Dashboard/DashboardNav";
import DepositTop from "./DepositTop";
import DepositHistory from "./DepositHistory";

const Deposit = () => {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const closeSidebar=()=>{
    setIsSideBarOpen(!isSideBarOpen);
  }
  return (
    <div className="row m-0 p-0 ">
       {
           isSideBarOpen && <div className={`sidebar-container p-0 ${isSideBarOpen&& "sidebar-active col-lg-3"}`}>
           <Sidebar closeSidebar={closeSidebar}/>
         </div>
         }
      <div className={`p-0 m-0 content-holder ${isSideBarOpen ? "col-9":"col-12"}`}>
        <div>
          <DashboardNav closeSidebar={closeSidebar}/>
        </div>
        <div className="ml-2">
          <DepositTop />
        </div>
        <div className="ml-4 mt-3 mr-3">
          <DepositHistory />
        </div>
      </div>
    </div>
  );
};

export default Deposit;
