import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer, getUserProfileReducer } from './Reducers/userReducer'
import { addDepositeReducer, depositHistoryReducer } from './Reducers/depositeReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    getProfile: getUserProfileReducer,
    addDeposite: addDepositeReducer,
    depositHistory: depositHistoryReducer,
})


const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {

    userLogin: { userInfo: userInfoFromStorage }
}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;