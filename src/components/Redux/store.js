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
} from "./Reducers/userReducer";
import {
  addDepositeReducer,
  depositHistoryReducer,
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
  getAdbyIdReducer,
  getAdsReducer,
  userGetAllAdsReducer,
  watchedAddReducer,
} from "./Reducers/adControllReducer";

import { incentiveHistoryReducer } from "./Reducers/incentiveReducer";
import { adminDashboardReducer } from "./Reducers/adminDashboardReducer";

import {
  sendWithdrawOtp,
  withdrawHistoryReducer,
  withdrawReducer,
} from "./Reducers/withdrawReducer";
import { confirmPasswordReducer, forgetPasswordByPhoneNumberReducer, forgetPasswordByVerifyOtpReducer } from "./Reducers/forgetPasswordReducer";


const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
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
  editAd: editAdReducer,
  userGetAds: userGetAllAdsReducer,
  watchedAd: watchedAddReducer,
  withdrawInfo: withdrawReducer,
  withdrawHistory: withdrawHistoryReducer,
  passChange: passwordChangeReducer,
  incentiveHistory: incentiveHistoryReducer,
  adminDashboardData: adminDashboardReducer,
  updateProfile: updateProfileReducer,
  userProfileUpdateByPicture : userProfileUpdateByPicture,
  sendOtp: sendWithdrawOtp,
  forgetPassByNum: forgetPasswordByPhoneNumberReducer,
  forgetPassByVerifyOtp: forgetPasswordByVerifyOtpReducer,
  confirmPassword: confirmPasswordReducer,
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
