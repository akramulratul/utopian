import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import background from '../../../image/adminbg.svg'
import { adminDashboardHistory } from '../../Redux/Actions/adminDashboardAction';

const AdminRightContent = () => {
    const dashboardData = useSelector(state => state.adminDashboardData)
    console.log(dashboardData);
    const { loading, error, adminInfo } = dashboardData
    console.log(loading, adminInfo);
    const [isloading, setIsloading] = useState(true);
    const stopLoading = () => {
        setIsloading(false);
    };

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(adminDashboardHistory())
        stopLoading();
    }, [dispatch])

    return (
        <div>
            <div className="background">
                <img src={background} alt="" />
            </div>

            {isloading ? (
                <p>Loading...</p>
            ) : loading ? (
                <p>Loading...</p>
            ) : (
                <div className="dash-right-content">
                    <div className="dash-right-card  d-flex justify-content-between m-1 my-3 p-4 rounded ">
                        <div className="title pt-1">
                            <p><small className='text-secondary'>Total Deposite</small></p>
                            <h2>${adminInfo.totalDeposit}</h2>
                        </div>
                        <div className="balance d-flex align-items-end">
                            <Link to='#'>view all</Link>
                        </div>
                    </div>

                    <div className="dash-right-card  d-flex justify-content-between m-1 my-3 p-4 rounded ">
                        <div className="title pt-1">
                            <p><small className='text-secondary'>Total Withdrawal</small></p>
                            <h2>${adminInfo.totalWithdrawal}</h2>
                        </div>
                        <div className="balance d-flex align-items-end">
                            <Link to='#'>view all</Link>
                        </div>
                    </div>

                    <div className="dash-right-card  d-flex justify-content-between m-1 my-3 p-4 rounded ">
                        <div className="title pt-1">
                            <p><small className='text-secondary'>Today Deposite</small></p>
                            <h2>${adminInfo.todayDeposit}</h2>
                        </div>
                        <div className="balance d-flex align-items-end">
                            <Link to='#'>view all</Link>
                        </div>
                    </div>

                    <div className="dash-right-card  d-flex justify-content-between m-1 my-3 p-4 rounded ">
                        <div className="title pt-1">
                            <p><small className='text-secondary'>Today Withdrawal</small></p>
                            <h2>${adminInfo.todayWithdrawal}</h2>
                        </div>
                        <div className="balance d-flex align-items-end">
                            <Link to='#'>view all</Link>
                        </div>
                    </div>

                </div>

            )}

        </div>
    );
};

export default AdminRightContent;