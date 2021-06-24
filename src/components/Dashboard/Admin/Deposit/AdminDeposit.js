import React from 'react';
import DashboardNav from '../../DashboardNav';
import Sidebar from '../../Sidebar';
const Deposit = () => {
    return (
        <div>
            <div className="row mr-0">
                <div className="col-lg-3 p-0">

                    <Sidebar />

                </div>
                <div className="col-lg-9 p-0">
                    <div>
                        <DashboardNav/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deposit;