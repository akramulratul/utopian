import React, { lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import PrivateRoute from "../privateRoute/privateRoute";
import Profile from "../Profile/Profile";
import Admin from "../Dashboard/Admin/Admin";
import Withdraw from "../Dashboard/Withdraw/Withdraw";
import PaymentMethod from "../Dashboard/Withdraw/PaymentMethod/PaymentMethod";
import Withdrawal from "../Dashboard/Withdraw/Withdrawal/Withdrawal";
import WithdrawOtp from "../Dashboard/Withdraw/WithdrawOtp/WithdrawOtp";
import Incentive from "../Incentive/DirectIncentive/Incentive";
import TeamIncentive from "../Incentive/TeamIncentive/TeamIncentive";
import ProfileUpdate from "../Profile/ProfileUpdate";
import ChangePassword from "../Profile/ChangePassword";
import PasswordChange from "../Profile/PasswordChange";
import AdminWithdrawals from "../Dashboard/Admin/AdminWithdraw/AllWithdrawals/AdminWithdrawals";
import TodaysWithdraw from "../Dashboard/Admin/AdminWithdraw/TodaysWithdraw/TodaysWithdraw";
import { Suspense } from "react";
// import ProfileDetails from "../Profile/ProfileDetails";
import Earning from "../Earning/Earning";
import ViewAdd from "../Earning/ViewAdd";
import Deposit from "../Deposit/Deposit";
import DepositNow from "../Deposit/DepositContent/DepositNow";
import Landing from "../LandingPage/Landing";
import AdminDeposit from "../Dashboard/Admin/AdminDeposit/AdminDeposit";
import DepositDetails from "../Dashboard/Admin/AdminDeposit/DepositDetails/DepositDetails";
import TodayDeposit from "../Dashboard/Admin/AdminDeposit/TodayDeposit/TodayDeposit";
import WithdrawDetails from "../Dashboard/Admin/AdminWithdraw/WithdrawDetails/WithdrawDetails";
import ForgetPassword from "../Authentication/ForgetPassword";
import About from "../Home/About/About";
import Contact from "../Home/Contact/Contact";
import Services from "../Home/Services/Services";

const ProfileDetails = lazy(() => import("../Profile/ProfileDetails"));
const HandleRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Services />
          </Route>
          <PrivateRoute path="/dashboard" exact>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/admin/dashboard">
            <Admin />
          </PrivateRoute>
          <Route path="/dashboard/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Register />
          </Route>
          <Route path="/forgot-password">
            <ForgetPassword />
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
          <Route path="/dashboard/user/profile/details">
            <Suspense fallback={<p>Loading...</p>}>
              <ProfileDetails />
            </Suspense>
          </Route>
          <Route path="/dashboard/user/profile/update-profile">
            <ProfileUpdate />
          </Route>
          <Route path="/dashboard/user/profile/change-password">
            <PasswordChange />
          </Route>
          <Route path="/teamincentive">
            <TeamIncentive />
          </Route>
          <Route path="/earning">
            <Earning />
          </Route>
          <Route path="/viewadd">
            <ViewAdd />
          </Route>
          <Route path="/deposit">
            <Deposit />
          </Route>
          <Route path="/depositnow">
            <DepositNow />
          </Route>
          <Route path="/admin/deposit">
            <AdminDeposit />
          </Route>
          <Route path="/today/deposit">
            <TodayDeposit />
          </Route>
          <PrivateRoute path="/admin/details">
            <DepositDetails />
          </PrivateRoute>
          <Route path="/admin/withdrawal">
            <AdminWithdrawals />
          </Route>
          <Route path="/admin/todays/withdrawal">
            <TodaysWithdraw />
          </Route>
          <Route path="/details">
            <WithdrawDetails />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default HandleRouter;
