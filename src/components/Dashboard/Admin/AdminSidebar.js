import React from "react";
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
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="admin-info py-5  d-flex justify-content-center flex-column align-items-center">
        <div className="profile-image pb-3">
          <img src={avater} alt="" />
        </div>
        <div className="profile-name">
          <h5>Regina Cooper</h5>
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
                <Link to="admin/dashboard">Dashboard</Link>
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
                <Link to="/dashboard/user/profile/details">My Profile</Link>
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
              <h6>Users</h6>
            </div>
          </div>
        </div>

        <div className="dashboard-menu">
          <div className="d-flex py-3">
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
        <div className="down-menu pl-4">
          <div className="d-flex py-3">
            <div className="px-5">
              <img src={rightArrow} alt="" />
            </div>
            <div>
              <Link to="admin/deposit">
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
        <div className="dashboard-menu">
          <div className="d-flex py-3">
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
        </div>
        <div className="dashboard-menu">
          <div className="d-flex py-3">
            <div className="px-5">
              <img src={ads} alt="" />
            </div>
            <div>
              <h6>Ads</h6>
            </div>
          </div>
        </div>
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
              <h6>Settings</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
