import React from 'react';
import toggleIcon from '../../image/icons/toggle nav icon.svg'
import notificationIcon from '../../image/icons/noti.svg'
import gear from '../../image/icons/settings.svg'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/Actions/userAction';
const DashboardNav = ({closeSidebar}) => {
    const history = useHistory();
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(logout())
        history.push('/login')
    }
    return (
        <div className="header bg-white px-lg-4 py-3 d-flex justify-content-between">
            <div className="left-content d-flex align-items-center ">
                <div className="toogle-b pr-3" onClick={closeSidebar}>
                    <img src={toggleIcon} alt="" />
                </div>
                <div className="logo px-lg-5">
                    <Link to='/'><h3>UtoPian</h3></Link>
                </div>
            </div>
            <div className="right-content d-flex align-items-center">
                <div className=" px-3">
                    <img src={notificationIcon} alt="" />
                </div>
                <div className=" px-3">
                    <img src={gear} alt="" />
                </div>
                <div className="btn btn-brand pt-2 ml-lg-5" onClick={logOut}>
                    <h6>Logout</h6>
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;