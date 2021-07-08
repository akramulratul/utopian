import React from "react";
import AdminSidebar from "../AdminSidebar";
import DashboardNav from "../../DashboardNav";
import UsersTop from "./UsersTop";
import Paginations from "../Paginations/Paginations";
import UsersHistory from "../Users/UsersHistory";
const Users = () => {
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
          <div>
            <UsersTop />
          </div>
          <div>
            <UsersHistory />
          </div>
          <div>
            <Paginations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
