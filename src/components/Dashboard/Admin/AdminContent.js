import React from 'react';
import DashboardNav from '../DashboardNav';
import AdminRightContent from './AdminRightContent';

const AdminContent = () => {
    return (
        <div>
            <DashboardNav />
            <div className="dashboard-container py-5 px-4">
                <div className="row">
                    <div className="col-lg-8">
                        <h1>graph</h1>
                    </div>
                    <div className="col-lg-4 admin-right-area">
                        <AdminRightContent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminContent;