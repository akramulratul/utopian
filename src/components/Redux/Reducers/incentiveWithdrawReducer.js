export const incentiveWithdrawReducer = (state = {}, action) => {
    switch (action.type) {
      case "ADD_WITHDRAW_REQUEST":
        return {
          loading: true,
          withdrawInfo: action.payload,
        };
      case "ADD_WITHDRAW_SUCCESS":
        return {
          loading: false,
          withdrawInfo: action.payload,
        };
      case "ADD_WITHDRAW_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export const incentiveWithdrawHistoryReducer = (state = {}, action) => {
    switch (action.type) {
      case "WITHDRAW_HISTORY_REQUEST":
        return {
          loading: true,
          withdrawInfo: action.payload,
        };
      case "WITHDRAW_HISTORY_SUCCESS":
        return {
          loading: false,
          withdrawInfo: action.payload,
        };
      case "WITHDRAW_HISTORY_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export const incentiveSendWithdrawOtp = (state = {}, action) => {
    switch (action.type) {
      case "WITHDRAW_OTP_REQUEST":
        return {
          loading: true,
          withdrawInfo: action.payload,
        };
      case "WITHDRAW_OTP_SUCCESS":
        return {
          loading: false,
          withdrawInfo: action.payload,
        };
      case "WITHDRAW_OTP_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  