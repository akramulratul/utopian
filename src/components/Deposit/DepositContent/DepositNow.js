import React, { useState } from "react";
import Sidebar from "../../Dashboard/Sidebar";
import DashboardNav from "../../Dashboard/DashboardNav";
import DepositTop from "../DepositTop";
import DepositLeft from "./DepositLeft";
import DepositRight from "./DepositRight";
import { ToastContainer } from "react-toastify";
const DepositNow = () => {
  const [depositeData, setDepositeData] = useState({});
  const [method, setMethod] = useState();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const data = {
    depositAmount: depositeData.depositAmount,
    paidBy: method,
    transactionId: depositeData.transectionId,
    sendFrom: depositeData.sentFrom,
  };
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
        <div className="ml-2 mr-2">
          <DepositTop />
        </div>
        <div className=" ml-4 mt-3 mr-4 d-flex">
          <DepositLeft
            data={data}
            method={method}
            setDepositeData={setDepositeData}
          />
          <DepositRight setMethod={setMethod} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DepositNow;
