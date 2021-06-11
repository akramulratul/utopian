import React from 'react';

import Sidebar from '../Sidebar';
import AdminContent from './AdminContent';

const Admin = () => {
    return (
        <div>
            <div className="row mr-0">
                <div className="col-lg-3 p-0">

                    <Sidebar />

                </div>
                <div className="col-lg-9 p-0">
                    <div>
                        <AdminContent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;