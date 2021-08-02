import React, { useState } from "react";
import DashboardNav from "../Dashboard/DashboardNav";
import Sidebar from "../Dashboard/Sidebar";
import Advertise from "./Advertise";
import EarningBar from "./EarningBar";
import { ToastContainer } from "react-toastify";

const Earning = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const closeSidebar=()=>{
    setIsSideBarOpen(!isSideBarOpen);
  }
  return (
    <div className="row m-0 p-0">
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
