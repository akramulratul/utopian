export const referralReducers = (state = {}, action) => {
  switch (action.type) {
    case "GET_REFERRAL_REQUEST":
      return {
        loading: true,
        referralInfo: action.payload,
      };
    case "GET_REFERRAL_SUCCESS":
      return {
        loading: false,
        referralInfo: action.payload,
      };
    case "GET_REFERRAL_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
