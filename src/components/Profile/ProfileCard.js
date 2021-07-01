import React from "react";
import profilePhoto from "../../image/1-intro-photo-final.jpg";

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
              {/* <h4>{userInfo.data.name}</h4> */}
              {/* <h6>{userInfo.data.userLevel}</h6> */}
            </div>
          </div>
        </div>
        <div className="account-info mt-2 w-100">
          <div className="holder row">
            <div className="financial-report-item col-lg-4 text-center ">
              <div className="py-2 px-1">
                {/* <h6>৳ {userInfo.data.totalAmount}</h6> */}
                <small>Total Amount</small>
              </div>
            </div>
            <div className="financial-report-item col-lg-4 text-center  border-left border-right">
              <div className="py-2 px-1">
                {/* <h6>৳ {userInfo.data.totalDeposit}</h6> */}
                <small>Total Deposit</small>
              </div>
            </div>
            <div className="financial-report-item col-lg-4 text-center">
              <div className="py-2 px-1">
                {/* <h6>৳ {userInfo.data.totalWithdrawal}</h6> */}
                <small>Total Withdraw</small>
              </div>
            </div>
          </div>
        </div>
        <div className="btn btn-brand w-100 py-2 mt-2" onClick="">
          <h6>Get Referral Link</h6>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
