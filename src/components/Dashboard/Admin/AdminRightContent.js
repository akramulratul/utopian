import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../../image/adminbg.svg'

const AdminRightContent = () => {
    return (
        <div>
            <div className="background">
                <img src={background} alt="" />
            </div>
            <div className="dash-right-content">
                <div className="dash-right-card  d-flex justify-content-between m-1 my-3 p-4 rounded ">
                    <div className="title pt-1">
                        <p><small className='text-secondary'>Total Deposite</small></p>
                        <h2>$2100.96</h2>
                    </div>
                    <div className="balance d-flex align-items-end">
                        <Link to='#'>view all</Link>
                    </div>
                </div>

                <div className="dash-right-card  d-flex justify-content-between m-1 my-3 p-4 rounded ">
                    <div className="title pt-1">
                        <p><small className='text-secondary'>Total Withdrawal</small></p>
                        <h2>$2100.96</h2>
                    </div>
                    <div className="balance d-flex align-items-end">
                        <Link to='#'>view all</Link>
                    </div>
                </div>

                <div className="dash-right-card  d-flex justify-content-between m-1 my-3 p-4 rounded ">
                    <div className="title pt-1">
                        <p><small className='text-secondary'>Today Deposite</small></p>
                        <h2>$2100.96</h2>
                    </div>
                    <div className="balance d-flex align-items-end">
                        <Link to='#'>view all</Link>
                    </div>
                </div>

                <div className="dash-right-card  d-flex justify-content-between m-1 my-3 p-4 rounded ">
                    <div className="title pt-1">
                        <p><small className='text-secondary'>Today Withdrawal</small></p>
                        <h2>$2100.96</h2>
                    </div>
                    <div className="balance d-flex align-items-end">
                        <Link to='#'>view all</Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AdminRightContent;