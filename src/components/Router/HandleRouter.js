import React, { lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import PrivateRoute from "../privateRoute/privateRoute";
import AdminRoute from "../privateRoute/adminRoute";
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
import AdminPasswordChange from "../Dashboard/Admin/AdminProfile/AdminPasswordChange";
import AdminWithdrawals from "../Dashboard/Admin/AdminWithdraw/AllWithdrawals/AdminWithdrawals";
import TodaysWithdraw from "../Dashboard/Admin/AdminWithdraw/TodaysWithdraw/TodaysWithdraw";
import { Suspense } from "react";
import AdminProfileDetails from "../Dashboard/Admin/AdminProfile/AdminProfileDetails";
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
import Referral from "../Referral/Referral";
import AdminProfileUpdate from "../Dashboard/Admin/AdminProfile/AdminProfileUpdate";
import RegisterOtp from "../Authentication/RegisterOtp";

import DepositMethod from "../Dashboard/Admin/AdminPaymentMethod/DepositMethod";
import AddPaymentMethod from "../Dashboard/Admin/AdminPaymentMethod/AddPaymentMethod";
import AdminSetting from "../Dashboard/Admin/AdminSetting/AdminSetting";
import UserProfileDetails from "../Dashboard/Admin/Users/ProfileView/UserProfileDetails";
import PaymentEdit from "../Dashboard/Admin/AdminPaymentMethod/PaymentEdit";
import EditPaymentMethod from "../Dashboard/Admin/AdminPaymentMethod/EditPaymentMethod";
import AdminTeamIncentive from "../Dashboard/Admin/BalanceReport/TeamIncentive/AdminTeamIncentive";
import AdminSalary from "../Dashboard/Admin/BalanceReport/AdminSalary/AdminSalary";
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
          <AdminRoute path="/admin/dashboard">
            <Admin />
          </AdminRoute>
          <PrivateRoute path="/dashboard/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/referral">
            <Referral />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Register />
          </Route>
          <Route path="/registration-verify-otp">
            <RegisterOtp />
          </Route>
          <Route path="/forgot-password">
            <ForgetPassword />
          </Route>
          <Route path="/verify-otp">
            <VerifyOtp />
          </Route>
          <Route path="/confirm-password">
            <ChangePassword />
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
          <PrivateRoute path="/dashboard/user/incentive">
            <Incentive />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/user/profile/details">
            <Suspense fallback={<p>Loading...</p>}>
              <ProfileDetails />
            </Suspense>
          </PrivateRoute>
          <AdminRoute path="/dashboard/admin/profile/details">
            <Suspense fallback={<p>Loading...</p>}>
              <AdminProfileDetails />
            </Suspense>
          </AdminRoute>
          <PrivateRoute path="/dashboard/user/profile/update-profile">
            <ProfileUpdate />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/user/profile/change-password">
            <PasswordChange />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/admin/profile/change-password">
            <AdminPasswordChange />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/user/teamincentive">
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
          <AdminRoute path="/admin/deposit">
            <AdminDeposit />
          </AdminRoute>
          <AdminRoute path="/today/deposit">
            <TodayDeposit />
          </AdminRoute>
          <AdminRoute path="/admin/details">
            <DepositDetails />
          </AdminRoute>
          <AdminRoute path="/admin/withdrawal">
            <AdminWithdrawals />
          </AdminRoute>
          <AdminRoute path="/admin/todays/withdrawal">
            <TodaysWithdraw />
          </AdminRoute>
          <AdminRoute path="/admin/createAds">
            <CreateAds />
          </AdminRoute>
          <AdminRoute path="/admin/allAds">
            <AllAds />
          </AdminRoute>
          <AdminRoute path="/admin/editAd/:id">
            <EditAds />
          </AdminRoute>
          <AdminRoute path="/dashboard/admin/profile/update-profile">
            <AdminProfileUpdate />
          </AdminRoute>

          <AdminRoute path="/admin/depositdetails/:id">
            <WithdrawDetails />
          </AdminRoute>
          <Route path="/getSignUp/referral/:referralId">
            <Register />
          </Route>

          <AdminRoute path="/admin/withdrawDetails">
            <WithdrawDetails />
          </AdminRoute>
          <AdminRoute path="/admin/allusers">
            <Users />
          </AdminRoute>
          <AdminRoute path="/admin/user/details/:id">
            <UserProfile />
          </AdminRoute>
          <AdminRoute path="/admin/incentive">
            <AdminIncentive />
          </AdminRoute>
          <AdminRoute path="/admin/team/incentive">
            <AdminTeamIncentive />
          </AdminRoute>
          <AdminRoute path="/admin/salary">
            <AdminSalary />
          </AdminRoute>
          <AdminRoute path="/admin/depositmethod">
            <DepositMethod />
          </AdminRoute>
          <AdminRoute path="/admin/addnew">
            <AddPaymentMethod />
          </AdminRoute>
          <AdminRoute path="/admin/setting">
            <AdminSetting />
          </AdminRoute>
          <AdminRoute path="/admin/users/profile/details/:username">
            <Suspense fallback={<p>Loading...</p>}>
              <UserProfileDetails />
            </Suspense>
          </AdminRoute>
        </Switch>
      </Router>
    </>
  );
};

export default HandleRouter;
