import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../../App';
import { getUserProfile } from '../Redux/Actions/userAction';
import DashboardContent from './DashboardContent';
import Sidebar from './Sidebar';

const Dashboard = () => {
    const dispatch = useDispatch()
    const [isLoading, setisLoading] = useState(true)
    const stopLoading = () => {
        setisLoading(false)
    }
    useEffect(() => {
        dispatch(getUserProfile())
        stopLoading();
    }, [dispatch])
    const getProfile = useSelector(state => state.getProfile)
    const { loading, error, userInfo } = getProfile
    console.log(userInfo);

    return (
        <>
            <div>
                <div className="row mr-0">
                    <div className="col-lg-3 p-0">

                        <Sidebar />

                    </div>
                    <div className="col-lg-9 p-0">
                        {
                            isLoading ? <p>loading...</p> :
                                <div>
                                    <DashboardContent depositeData={userInfo} />
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;