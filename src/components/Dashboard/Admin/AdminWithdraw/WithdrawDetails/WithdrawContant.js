import React from "react";

const WithdrawContant = () => {
  return (
    <div className="dashboard-container py-5 px-4">
      <div className="row d-flex">
        <div className="col-lg-8">
          <div className="mt-3 bg-white">
            <h4 className="border-bottom">Withdrawal Details</h4>
            <h6>Txn Id:txn-123432434354443</h6>
            <h6>Withdrawal Amount:৳45000.00 </h6>
            <h6>Status:pending</h6>
            <h6>Created At:12 jun 2021</h6>
          </div>
          <div className="mt-3 bg-white">
            <h4 className="border-bottom">Payment Method</h4>
            <h6>Phone Number:</h6>
          </div>
        </div>
        <div>
          <div className="col-lg-4 admin-right-area bg-white">
            <h4 className="border-bottom">Withdrawal By</h4>
            <h6>USER</h6>
          </div>
          <div>
            <div className="btn btn-brand w-100 py-2 mt-2" onClick="">
              <h6>Approve</h6>
            </div>
            <div className="btn btn-brand w-100 py-2 mt-2" onClick="">
              <h6>Decline</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawContant;
