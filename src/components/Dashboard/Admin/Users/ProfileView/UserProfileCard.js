import React from "react";
import profilePhoto from "../../../../../image/profile.png";

const ProfileCard = () => {
  return (
    <>
      <div className="profile-card-container">
        <div className="profile-card-info">
          <div>
            <div className="profile-card-img  d-flex justify-content-center align-items-center mt-3 pt-4">
              <img src={profilePhoto} alt="" />
            </div>
            <div className="name-level p-2 text-center">
              <h4>User Name</h4>
              <h6>User Level</h6>
            </div>
          </div>
        </div>
        <div className="account-info mt-2 w-100">
          <div className="holder row">
            <div className="financial-report-item col-lg-4 text-center ">
              <div className="py-2 px-1">
                <h6>৳ 15000</h6>
                <small>Total Amount</small>
              </div>
            </div>
            <div className="financial-report-item col-lg-4 text-center  border-left border-right">
              <div className="py-2 px-1">
                <h6>৳ 5000</h6>
                <small>Total Deposit</small>
              </div>
            </div>
            <div className="financial-report-item col-lg-4 text-center">
              <div className="py-2 px-1">
                <h6>৳ 1400</h6>
                <small>Total Withdraw</small>
              </div>
            </div>
          </div>
        </div>
        <div className="btn button-decline btn-brand w-100 py-2 mt-2">
          <h6>Suspend</h6>
        </div>
        <div className="btn btn-warning w-100 py-2 mt-2">
          <h6>Temporary Suspend</h6>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ProfileCard;
