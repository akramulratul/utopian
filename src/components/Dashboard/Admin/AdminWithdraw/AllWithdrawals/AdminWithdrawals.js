import React from "react";
import DashboardNav from "../../../DashboardNav";
import AdminSidebar from "../../AdminSidebar";
import { useSelector } from "react-redux";
import Paginations from "../../Paginations/Paginations";
import AdminWithdrawHistory from "./AdminWithdrawHistory";
import AdminWithdrawTop from "./AdminWithdrawTop";
import Paginate from "../Paginate";
const Deposit = () => {
  const withdrawHistory = useSelector((state) => state.adminWithdraw);
  const { pageNo, lastPage, pageSize, totalPages, itemCount, totalItems } =
    withdrawHistory;
  return (
    <div>
      <div className="row mr-0">
        <div className="col-lg-3 p-0">
          <AdminSidebar />
        </div>
        <div className="col-lg-9 p-0 witdraw-background">
          <div>
            <DashboardNav />
          </div>
          <div>{/* <AdminWithdrawTop /> */}</div>
          <div>
            <AdminWithdrawHistory />
          </div>
          {/* <div>
            <Paginations />
          </div> */}
          <Paginate
            pageNo={pageNo}
            itemCount={itemCount}
            lastPage={true}
            pageSize={pageSize}
            totalItems={totalItems}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export default Deposit;
