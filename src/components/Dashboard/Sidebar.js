import React from 'react';
import avater from '../../image/avatar.png'
import dashIcon from '../../image/icons/dash.svg'
import profileIcon from '../../image/icons/profile.svg'
import depositeIcon from '../../image/icons/depo.svg'
import withdrawIcon from '../../image/icons/with.svg'
import earningIcon from '../../image/icons/earn.svg'
import downArrow from '../../image/icons/down.svg'
import rightArrow from '../../image/icons/right.svg'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="profile-info py-5  d-flex justify-content-center flex-column align-items-center" >
        <div className='profile-image pb-3'>
          <img src={avater} alt="" />
        </div>
        <div className="profile-name">
          <h5>Regina Cooper</h5>
          <small>User lavel</small>
        </div>
      </div>
      <div className="dashbord-menu-wrapper">
        <div className="dashboard-menu">
          <div className="d-flex py-3">
            <div className='px-5'>
              <img src={dashIcon} alt="" />
            </div>
            <div>
              <h6><Link to="/dashboard">Dashboard</Link></h6>
            </div>
          </div>
        </div>

        <div className="dashboard-menu">
          <div className="d-flex py-3">
            <div className='px-5'>
              <img src={profileIcon} alt="" />
            </div>
            <div>
              <h6><Link to="/dashboard/user/profile/details">My Profile</Link></h6>
            </div>
          </div>
        </div>

        <div className="dashboard-menu">
          <div className="d-flex py-3">
            <div className='px-5'>
              <img src={depositeIcon} alt="" />
            </div>
            <div>
              <h6><Link to="/DepositNow">Deposit</Link></h6>
            </div>
          </div>
        </div>

        <div className="dashboard-menu">
          <div className="d-flex py-3">
            <div className='px-5'>
              <img src={withdrawIcon} alt="" />
            </div>
            <div>
              <h6><Link to="/payment-method">Withdrawal</Link></h6>
            </div>
          </div>
        </div>

        <div className="dashboard-menu">
          <div className="d-flex py-3">
            <div className='px-5'>
              <img src={earningIcon} alt="" />

            </div>
            <div className='pr-5'>
              <h6>Earning</h6>
            </div>
            <div className='pl-5 ml-5'>
              <img src={downArrow} alt="" />
            </div>
          </div>
        </div>

        <div className="down-menu pl-4">
          <div className="d-flex py-3">
            <div className='px-5'>
              <img src={rightArrow} alt="" />
            </div>
            <div>
              <h6>Earning</h6>
            </div>
          </div>
        </div>

        <div className="down-menu pl-4">
          <div className="d-flex py-3">
            <div className='px-5'>
              <img src={rightArrow} alt="" />
            </div>
            <div>
              <h6>Referance Bonus</h6>
            </div>
          </div>
        </div>

        <div className="down-menu pl-4">
          <div className="d-flex py-3">
            <div className='px-5'>
              <img src={rightArrow} alt="" />
            </div>
            <div>
              <h6>Generation Bonus</h6>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Sidebar;
