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

const HandleRouter = () => {
    return (
        <>
            <Router>
                <Test />
                <Switch>

                    <Route exact path="/">
                        <Home />

                    </Route>
                    <PrivateRoute path="/dashboard">
                        <Dashboard />
                    </PrivateRoute>
                    <Route path="/addDeposit">
                        <AddDeposit />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/registration">
                        <Register />
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