import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  getUserProfileReducer,
} from "./Reducers/userReducer";
import {
  addDepositeReducer,
  depositHistoryReducer,
} from "./Reducers/depositeReducer";
import { adminDepositHistoryReducer } from "./Reducers/adminBalanceControlReducer";
import { adminDepositeManageAction } from "./Actions/adminBalanceControlAction";
import {
  createAdreducer,
  deleteAdReducer,
  editAdReducer,
  getAdbyIdReducer,
  getAdsReducer,
  userGetAllAdsReducer,
  watchedAddReducer,
} from "./Reducers/adControllReducer";
import { withdrawHistoryReducer, withdrawReducer } from "./Reducers/withdrawReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  getProfile: getUserProfileReducer,
  addDeposite: addDepositeReducer,
  depositHistory: depositHistoryReducer,
  adminDeposit: adminDepositHistoryReducer,
  depositManage: adminDepositeManageAction,
  createAd: createAdreducer,
  getAds: getAdsReducer,
  deleteAd: deleteAdReducer,
  getAdById: getAdbyIdReducer,
  editAd: editAdReducer,
  userGetAds: userGetAllAdsReducer,
  watchedAd: watchedAddReducer,
  withdrawInfo: withdrawReducer,
  withdrawHistory: withdrawHistoryReducer,
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
