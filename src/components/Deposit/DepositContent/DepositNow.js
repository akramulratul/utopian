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

  const data = {
    depositAmount: depositeData.depositAmount,
    paidBy: method,
    transactionId: depositeData.transectionId,
    sendFrom: depositeData.sentFrom,
  };
  return (
    <div className="row m-0 p-0 ">
      <div className="col-lg-3 m-0 p-0">
        <Sidebar />
      </div>
      <div className="content-holder col-lg-9 m-0 p-0 Deposit-bg">
        <div>
          <DashboardNav />
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
