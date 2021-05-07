import React from 'react';
import DashboardContent from './DashboardContent';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <div>
            <div className="row mr-0">
                <div className="col-lg-3 p-0">

                    <Sidebar />

                </div>
                <div className="col-lg-9 p-0">
                    <div>
                        <DashboardContent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;