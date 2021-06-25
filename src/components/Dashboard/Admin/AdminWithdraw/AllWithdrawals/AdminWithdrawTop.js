import React from "react";
import { Button } from "react-bootstrap";
const AdminWithdrawTop = () => {
  return (
    <div className="bg-white d-flex justify-content-between rounded mt-3 ml-3 mr-3">
      <div className="left-content d-flex align-items-center ">
        <div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white">
              <li class="breadcrumb-item">
                <a href="/admin/dashboard">Dashboard</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                All Withdrawal
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="right-content d-flex  align-items-center m-3 p-2 border-left">
        <div className="px-3">
          <h2>৳2100.96</h2>
          <small>Lifetime Total Withdrawal</small>
        </div>
        <div className="px-3">
          <Button
            className="Deposit-btn btn btn-brand w-100 py-2 mt-2"
            type="button"
          >
            Today Withdraw
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminWithdrawTop;
