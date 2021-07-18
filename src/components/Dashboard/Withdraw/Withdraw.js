import React,{useState} from "react";
import Sidebar from "../Sidebar";
import { useHistory } from "react-router";
import WithdrawNow from "./WithdrawNow";
import WithdrawHistory from "./WithdrawHistory/WithdrawHistory";
import DashboardNav from "../DashboardNav";
const Withdraw = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const closeSidebar=()=>{
    setIsSideBarOpen(!isSideBarOpen);
  }
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
      {
           isSideBarOpen && <div className={`sidebar-container p-0 ${isSideBarOpen&& "sidebar-active col-lg-3"}`}>
           <Sidebar closeSidebar={closeSidebar}/>
         </div>
         }
        <div className={`p-0 m-0 witdraw-background ${isSideBarOpen ? "col-9":"col-12"}`}>
          <DashboardNav closeSidebar={closeSidebar}/>
          <WithdrawNow />
          <WithdrawHistory />
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
