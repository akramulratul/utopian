import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../Home/Home/Home'
import Dashboard from '../Dashboard/Dashboard'
import AddDeposit from '../Dashboard/AddDeposit/AddDeposit'
import Login from '../Authentication/Login'
import Register from '../Authentication/Register'
import PrivateRoute from '../privateRoute/privateRoute'
import Profile from '../Profile/Profile';
import Test from '../Test';
import Admin from '../Dashboard/Admin/Admin';



const HandleRouter = () => {
    return (
        <>
            <Router>

                <Switch>

                    <Route exact path="/">
                        <Home />

                    </Route>
                    <PrivateRoute exact path="/dashboard">
                        <Dashboard />
                    </PrivateRoute>
                    {/* <PrivateRoute path="/admin/dashboard">
                        <AdminDashboard />
                    </PrivateRoute> */}
                    <PrivateRoute path="/addDeposit">
                        <AddDeposit />
                    </PrivateRoute>
                    <Route path="/dashboard/user/profile">
                        <Profile />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/registration">
                        <Register />
                    </Route>
                    <Route path="/admin">
                        <Admin />
                    </Route>



                    {/* <Route path="/extra">
                    <Extra />
                </Route> */}
                </Switch>
            </Router>
        </>
    );
};

export default HandleRouter;