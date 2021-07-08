import React from "react";
import Sidebar from "../Sidebar";
import { useHistory } from "react-router";
import WithdrawNow from "./WithdrawNow";
import WithdrawHistory from "./WithdrawHistory/WithdrawHistory";
import DashboardNav from "../DashboardNav";
const Withdraw = () => {
  const history = useHistory();
  let totalWithdraw = 0;
  for (let i = 0; i < Withdraw.length; i++) {
    totalWithdraw = Withdraw[i].withdrawAmount + totalWithdraw;
  }
  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <div>
      <div className="row mr-0">
        <div className="col-lg-3 p-0">
          <Sidebar />
        </div>
        <div className="col-lg-9 p-0 witdraw-background">
          <DashboardNav />
          <WithdrawNow />
          <WithdrawHistory />
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
