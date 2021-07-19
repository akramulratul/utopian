import React from "react";
import AdminSidebar from "../AdminSidebar";
import DashboardNav from "../../DashboardNav";
import DepositMethodTop from "./DepositMethodTop";
import PaymentEdit from "./PaymentEdit";

const EditPaymentMethod = () => {
    return (
        <div className="row m-0 p-0">
            <div className="col-lg-3 p-0">
                <AdminSidebar />
            </div>
            <div className="content-holder col-lg-9 m-0 p-0 incentive-background">
                <div className="dash-nav">
                    <DashboardNav />
                </div>
                <DepositMethodTop />
                <PaymentEdit />
            </div>
        </div>
    );
};

export default EditPaymentMethod;
