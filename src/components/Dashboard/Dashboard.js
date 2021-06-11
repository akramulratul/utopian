import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import DashboardContent from './DashboardContent';
import Sidebar from './Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [depositeData, setDepositeData] = useState([]);
    let token = '';
    if (localStorage.getItem('token')) {
        token = JSON.parse(localStorage.getItem('token')).data.token;
    }
    useEffect(() => {

        if (loggedInUser) {
            fetch('https://utopain-backend.herokuapp.com/user/balance', {
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${token}`,
                },
            })
                .then(response => response.json())
                .then(data => {
                    setDepositeData(data.data.data)
                    console.log(data.data.data);
                });
        }
    }, [])
    console.log(loggedInUser);
    return (
        <div>
            <div className="row mr-0">
                <div className="col-lg-2 p-0">

                    <Sidebar />

                </div>
                <div className="col-lg-10 p-0">
                    <div>
                        <DashboardContent depositeData={depositeData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;