import React, { useState } from "react";
import avater from "../../../image/avatar.png";
import dashIcon from "../../../image/icons/dash.svg";
import profileIcon from "../../../image/icons/profile.svg";
import users from "../../../image/icons/Users.svg";
import alldeposit from "../../../image/icons/alldeposit.svg";
import withdrawIcon from "../../../image/icons/with.svg";
import downArrow from "../../../image/icons/down.svg";
import support from "../../../image/icons/support.png";
import rightArrow from "../../../image/icons/right.svg";
import ads from "../../../image/icons/adds.svg";
import setting from "../../../image/icons/settings.svg";
import deposit from "../../../image/icons/Deposit Method.svg";
import balanceReport from "../../../image/icons/IconBalanceReport.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isAllDepositOpen, setIsAllDepositOpen] = useState(false);
  const [isAllWithdrawOpen, setIsAllWithdrawOpen] = useState(false);
  const [isBalanceOpen, setIsBalanceOpen] = useState(false);

  const [isAdsOpen, setIsAdsOpen] = useState(false);
  const handleAllDepositDropdown = () => {
    setIsAllDepositOpen(!isAllDepositOpen);
  };
  const handleAllWithdrawDropdown = () => {
    setIsAllWithdrawOpen(!isAllWithdrawOpen);
  };
  const handleAdsDropdown = () => {
    setIsAdsOpen(!isAdsOpen);
  };
  const handleBalanceDropdown = () => {
    setIsBalanceOpen(!isBalanceOpen);
  };
  return (
    <div className="sidebar">
      <div className="admin-info py-5  d-flex justify-content-center flex-column align-items-center">
        <div className="profile-image pb-3">
          <img src={avater} alt="" />
        </div>
        <div className="profile-name">
          <small>Admin</small>
        </div>
      </div>
      <div className="dashbord-menu-wrapper">
        <div className="dashboard-menu">
          <div className="d-flex py-3">
            <div className="px-5">
              <img src={dashIcon} alt="" />
            </div>
            <div>
              <h6>
                <Link to="/admin/dashboard">Dashboard</Link>
              </h6>
            </div>
          </div>
        </div>

        <div className="dashboard-menu">
          <div className="d-flex py-3">
            <div className="px-5">
              <img src={profileIcon} alt="" />
            </div>
            <div>
              <h6>
                <Link to="/dashboard/admin/profile/details">Admin Profile</Link>
              </h6>
            </div>
          </div>
        </div>

        <div className="dashboard-menu">
          <div className="d-flex py-3">
            <div className="px-5">
              <img src={users} alt="" />
            </div>
            <div>
              <h6>
                <Link to="/admin/allusers">All Users</Link>
              </h6>
            </div>
          </div>
        </div>
        <div className="dashboard-menu">
          <div className="d-flex py-3">
            <div className="px-5">
              <img src={deposit} alt="" />
            </div>
            <div>
              <Link to="/admin/depositmethod">
                <h6>Deposit Method</h6>
              </Link>
            </div>
          </div>
        </div>

        <div className="dashboard-menu">
          <div className="d-flex py-3" onClick={handleAllDepositDropdown}>
            <div className="px-5">
              <img src={alldeposit} alt="" />
            </div>
            <div>
              <h6>All Deposit</h6>
            </div>
            <div className="pl-5 ml-5">
              <img src={downArrow} alt="" />
            </div>
          </div>
        </div>
        {isAllDepositOpen && (
          <div className="earning-dropdown">
            <div className="down-menu pl-4">
              <div className="d-flex py-3">
                <div className="px-5">
                  <img src={rightArrow} alt="" />
                </div>
                <div>
                  <Link to="/admin/deposit">
                    <h6>Deposits</h6>
                  </Link>
                </div>
              </div>
            </div>
            <div className="down-menu pl-4">
              <div className="d-flex py-3">
                <div className="px-5">
                  <img src={rightArrow} alt="" />
                </div>
                <div>
                  <Link to="/today/deposit">
                    <h6>Today Deposit</h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="dashboard-menu">
          <div className="d-flex py-3" onClick={handleAllWithdrawDropdown}>
            <div className="px-5">
              <img src={withdrawIcon} alt="" />
            </div>
            <div className="pr-5">
              <h6>All Withdrawals</h6>
            </div>
            <div className="pl-3 ml-2">
              <img src={downArrow} alt="" />
            </div>
          </div>
        </div>
        {isAllWithdrawOpen && (
          <div className="earning-dropdown">
            <div className="down-menu pl-4">
              <div className="d-flex py-3">
                <div className="px-5">
                  <img src={rightArrow} alt="" />
                </div>
                <Link to="/admin/withdrawal">
                  <div>
                    <h6>Withdrawals</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="down-menu pl-4">
              <div className="d-flex py-3">
                <div className="px-5">
                  <img src={rightArrow} alt="" />
                </div>
                <Link to="/admin/todays/withdrawal">
                  <div>
                    <h6>Todays Withdraw</h6>
                  </div>
                </Link>
              </div>
              <div className="d-flex py-3">
                <div className="px-5">
                  <img src={rightArrow} alt="" />
                </div>
                <div>
                  <h6>Incentive Withdraw</h6>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="dashboard-menu">
          <div className="d-flex py-3" onClick={handleAdsDropdown}>
            <div className="px-5">
              <img src={ads} alt="" />
            </div>
            <div>
              <h6>Ads Control</h6>
            </div>
            <div className="pl-3 ml-2">
              <img src={downArrow} alt="" />
            </div>
          </div>
        </div>
        {isAdsOpen && (
          <div className="earning-dropdown">
            <div className="down-menu pl-4">
              <div className="d-flex py-3">
                <div className="px-5">
                  <img src={rightArrow} alt="" />
                </div>
                <div>
                  <Link to="/admin/allAds">
                    <h6>Ads List</h6>
                  </Link>
                </div>
              </div>
            </div>
            <div className="down-menu pl-4">
              <div className="d-flex py-3">
                <div className="px-5">
                  <img src={rightArrow} alt="" />
                </div>
                <div>
                  <Link to="/admin/createAds">
                    <h6>Create New Ads</h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="dashboard-menu">
          <div className="d-flex py-3" onClick={handleBalanceDropdown}>
            <div className="px-5">
              <img src={balanceReport} alt="" />
            </div>
            <div>
              <h6>Balance Report</h6>
            </div>
            <div className="pl-3 ml-2">
              <img src={downArrow} alt="" />
            </div>
          </div>
        </div>
        {isBalanceOpen && (
          <div className="earning-dropdown">
            <div className="down-menu pl-4">
              <div className="d-flex py-3">
                <div className="px-5">
                  <img src={rightArrow} alt="" />
                </div>
                <div>
                  <Link to="/admin/incentive">
                    <h6>Incentive List</h6>
                  </Link>
                </div>
              </div>
            </div>
            <div className="down-menu pl-4">
              <div className="d-flex py-3">
                <div className="px-5">
                  <img src={rightArrow} alt="" />
                </div>
                <div>
                  <Link to="/admin/team/incentive">
                    <h6>Team Incentive</h6>
                  </Link>
                </div>
              </div>
            </div>
            <div className="down-menu pl-4">
              <div className="d-flex py-3">
                <div className="px-5">
                  <img src={rightArrow} alt="" />
                </div>
                <div>
                  <Link to="/admin/salary">
                    <h6>Salary</h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="dashboard-menu">
          <div className="d-flex py-3">
            <div className="px-5">
              <img src={support} alt="" />
            </div>
            <div>
              <h6>Support List</h6>
            </div>
          </div>
        </div>
        <div className="dashboard-menu">
          <div className="d-flex py-3">
            <div className="px-5">
              <img src={setting} alt="" />
            </div>
            <div>
              <Link to="/admin/setting">
                <h6>Settings</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
