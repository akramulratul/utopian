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
import ForgetPassword from "../Authentication/ForgetPassword/ForgetPassword";
import About from "../Home/About/About";
import Contact from "../Home/Contact/Contact";
import Services from "../Home/Services/Services";
import CreateAds from "../Dashboard/Admin/Ads/CreateAds";
import AllAds from "../Dashboard/Admin/Ads/AllAds";
import EditAds from "../Dashboard/Admin/Ads/EditAds";
import AdminIncentive from "../Dashboard/Admin/AdminIncentive/AdminIncentive";
import Users from "../Dashboard/Admin/Users/Users";
import UserProfile from "../Dashboard/Admin/Users/ProfileView/UserProfile";
import VerifyOtp from "../Authentication/ForgetPassword/VerifyOtp";
import ChangePassword from "../Authentication/ForgetPassword/ConfirmPassword";

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
          <Route path="/verify-otp">
            <VerifyOtp/>
          </Route>
          <Route path="/confirm-password">
            <ChangePassword/>
          </Route>
          <PrivateRoute path="/withdraw">
            <Withdraw />
          </PrivateRoute>
          <PrivateRoute path="/payment-method">
            <PaymentMethod />
          </PrivateRoute>
          <PrivateRoute path="/withdrawal">
            <Withdrawal />
          </PrivateRoute>
          <PrivateRoute path="/otp">
            <WithdrawOtp />
          </PrivateRoute>
          <PrivateRoute path="/incentive">
            <Incentive />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/user/profile/details">
            <Suspense fallback={<p>Loading...</p>}>
              <ProfileDetails />
            </Suspense>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/user/profile/update-profile">
            <ProfileUpdate />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/user/profile/change-password">
            <PasswordChange />
          </PrivateRoute>
          <PrivateRoute path="/teamincentive">
            <TeamIncentive />
          </PrivateRoute>
          <PrivateRoute path="/earning">
            <Earning />
          </PrivateRoute>
          <PrivateRoute path="/viewad/:id">
            <ViewAdd />
          </PrivateRoute>
          <PrivateRoute path="/deposit">
            <Deposit />
          </PrivateRoute>
          <PrivateRoute path="/depositnow">
            <DepositNow />
          </PrivateRoute>
          <PrivateRoute path="/admin/deposit">
            <AdminDeposit />
          </PrivateRoute>
          <PrivateRoute path="/today/deposit">
            <TodayDeposit />
          </PrivateRoute>
          <PrivateRoute path="/admin/details">
            <DepositDetails />
          </PrivateRoute>
          <PrivateRoute path="/admin/withdrawal">
            <AdminWithdrawals />
          </PrivateRoute>
          <PrivateRoute path="/admin/todays/withdrawal">
            <TodaysWithdraw />
          </PrivateRoute>
          <PrivateRoute path="/admin/createAds">
            <CreateAds />
          </PrivateRoute>
          <PrivateRoute path="/admin/allAds">
            <AllAds />
          </PrivateRoute>
          <PrivateRoute path="/admin/editAd/:id">
            <EditAds />
          </PrivateRoute>

          <Route path="/admin/depositdetails/:id">
            <WithdrawDetails />
          </Route>
          <Route path="/getSignUp/referral/:referralId">
            <Register />
          </Route>

          <PrivateRoute path="/admin/withdrawDetails">
            <WithdrawDetails />
          </PrivateRoute>
          <PrivateRoute path="/admin/allusers">
            <Users />
          </PrivateRoute>
          <PrivateRoute path="/admin/userprofile">
            <UserProfile />
          </PrivateRoute>
          <PrivateRoute path="/admin/incentive">
            <AdminIncentive />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
};

export default HandleRouter;
