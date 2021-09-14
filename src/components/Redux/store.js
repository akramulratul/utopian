import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  getUserProfileReducer,
  passwordChangeReducer,
  updateProfileReducer,
  userProfileUpdateByPicture,
  userRegisterOtpVerification,
} from "./Reducers/userReducer";
import {
  addDepositeReducer,
  depositHistoryReducer,
  getUserDepositMethodReducer,
} from "./Reducers/depositeReducer";
import {
  adminDepositHistoryReducer,
  adminWithdrawHistoryReducer,
  adminDepositManageReducer,
  adminWithdrawManageReducer,
} from "./Reducers/adminBalanceControlReducer";
import {
  createAdreducer,
  deleteAdReducer,
  editAdReducer,
  getAdbyIdAdminReducer,
  getAdbyIdReducer,
  getAdsReducer,
  userGetAllAdsReducer,
  watchedAddReducer,
} from "./Reducers/adControllReducer";

import { adminIncentiveApprovedReducer, adminIncentiveDeclineReducer, adminTeamIncentiveApprovedReducer,
   adminTeamIncentiveDeclineReducer,incentiveHistoryReducer, incentiveTeamHistoryReducer,
   salariesHistoryReducer, 
   salaryApproved,
   salaryDecline} from "./Reducers/incentiveReducer";

import { adminDashboardReducer, adminUserDetailsListReducer, adminUserListReducer, adminUserSuspendReducer, adminUserTemporarySuspendReducer } from "./Reducers/adminDashboardReducer";

import {
  sendWithdrawOtp,
  withdrawHistoryReducer,
  withdrawReducer,
} from "./Reducers/withdrawReducer";

import { confirmPasswordReducer, forgetPasswordByPhoneNumberReducer, forgetPasswordByVerifyOtpReducer } from "./Reducers/forgetPasswordReducer";


import { referralReducers } from "./Reducers/referralReducers";
import { graphReducer } from "./Reducers/graphReducer";
import { deleteDepositMethodReducer, depositMethodHistoryReducer, depositMethodReducer, updateDepositMethodHistoryReducer } from "./Reducers/adminDepositMethodReducer";


const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userRegisterOtpVerify: userRegisterOtpVerification,
  getProfile: getUserProfileReducer,
  addDeposite: addDepositeReducer,
  depositHistory: depositHistoryReducer,
  adminDeposit: adminDepositHistoryReducer,
  adminWithdraw: adminWithdrawHistoryReducer,
  depositManage: adminDepositManageReducer,
  wihdrawManage: adminWithdrawManageReducer,
  createAd: createAdreducer,
  getAds: getAdsReducer,
  deleteAd: deleteAdReducer,
  getAdById: getAdbyIdReducer,
  getAdByIdAdmin: getAdbyIdAdminReducer,
  editAd: editAdReducer,
  userGetAds: userGetAllAdsReducer,
  watchedAd: watchedAddReducer,
  withdrawInfo: withdrawReducer,
  withdrawHistory: withdrawHistoryReducer,
  passChange: passwordChangeReducer,
  incentiveHistory: incentiveHistoryReducer,
  adminIncentiveApproved: adminIncentiveApprovedReducer,
  adminIncentiveDecline: adminIncentiveDeclineReducer,

  //teamIncentive
  incentiveTeamHistory: incentiveTeamHistoryReducer,
  adminTeamIncentiveApproved: adminTeamIncentiveApprovedReducer,
  adminTeamIncentiveDeclineReducer: adminTeamIncentiveDeclineReducer,

  //Admin_salaries
  salariesHistory:salariesHistoryReducer,
  salaryApproved:salaryApproved,
  salaryDecline:salaryDecline,

  adminDashboardData: adminDashboardReducer,
  updateProfile: updateProfileReducer,
  userProfileUpdateByPicture: userProfileUpdateByPicture,
  sendOtp: sendWithdrawOtp,

  forgetPassByNum: forgetPasswordByPhoneNumberReducer,
  forgetPassByVerifyOtp: forgetPasswordByVerifyOtpReducer,
  confirmPassword: confirmPasswordReducer,

  getReferral: referralReducers,
  adminUserList: adminUserListReducer,
  adminUserDetailsList: adminUserDetailsListReducer,
  userSuspend: adminUserSuspendReducer,
  temporarySuspend: adminUserTemporarySuspendReducer,
  graph: graphReducer,
  depositMethod: depositMethodReducer,
  depositMethodHistory: depositMethodHistoryReducer,
  updateDepositMethodHistory: updateDepositMethodHistoryReducer,
  deleteDepositMethod: deleteDepositMethodReducer,

  getUserDepositMethod: getUserDepositMethodReducer,

});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
