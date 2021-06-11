import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home/Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import AddDeposit from "../Dashboard/AddDeposit/AddDeposit";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import PrivateRoute from "../privateRoute/privateRoute";
import Profile from "../Profile/Profile";
import Test from "../Test";
import Withdraw from "../Dashboard/Withdraw/Withdraw";
import PaymentMethod from "../Dashboard/Withdraw/PaymentMethod/PaymentMethod";
import Withdrawal from "../Dashboard/Withdraw/Withdrawal/Withdrawal";
import WithdrawOtp from "../Dashboard/Withdraw/WithdrawOtp/WithdrawOtp";
import Incentive from "../Dashboard/Incentive/DirectIncentive/Incentive";
const HandleRouter = () => {
  return (
    <>
      <Router>
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
          <Route path="/withdraw">
            <Withdraw />
          </Route>
          <Route path="/payment-method">
            <PaymentMethod />
          </Route>
          <Route path="/withdrawal">
            <Withdrawal />
          </Route>
          <Route path="/otp">
            <WithdrawOtp />
          </Route>
          <Route path="/incentive">
            <Incentive />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default HandleRouter;
