import React, { useEffect } from 'react';
import Sidebar from '../Dashboard/Sidebar';
import DashboardNav from '../Dashboard/DashboardNav';
import axios from 'axios';
import SubNav from '../Dashboard/Shared/SubNav';
import { Route } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import UpdateProfile from './UpdateProfile'



const ProfileUpdate = () => {

    useEffect(() => {
        axios.get('')
    }, [])
    return (
        <div className='profile-container'>
            <div className="row m-0 p-0">
                <div className="col-lg-3 m-0 p-0">
                    <Sidebar />
                </div>
                <div className="content-holder col-lg-9 m-0 p-0">
                    <div className="dash-nav">
                        <DashboardNav />
                    </div>
                    <div className=" row m-0 p-0 profile-content-wrpper">
                        <div className="col-lg-8 m-0 p-0 p-lg-3">
                            <div className="profile-content">
                                <div className="profile-nav">
                                    <SubNav
                                        firstOption={{ link: '/dashboard/user/profile/details', title: 'Profile' }}
                                        secondOption={{ link: '/dashboard/user/profile/update-profile', title: 'Update Profile' }}
                                        thirdOption={{ link: '/dashboard/user/profile/change-password', title: 'Change Password' }}
                                    />
                                </div>
                                <div className="profile-content-detail rounded">
                                    <UpdateProfile />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-lg-3">
                            <ProfileCard />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProfileUpdate;