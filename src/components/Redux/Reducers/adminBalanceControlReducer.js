export const adminDepositHistoryReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADMIN_DEPOSITE_HISTORY_REQUEST":
      return {
        loading: true,
        depositeInfo: action.payload,
      };
    case "ADMIN_DEPOSITE_HISTORY_SUCCESS":
      return {
        loading: false,
        depositInfo: action.payload,
      };
    case "ADMIN_DEPOSITE_HISTORY_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const adminDepositManageReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADMIN_DEPOSITE_MANAGE_REQUEST":
      return {
        loading: true,
        depositStatus: action.payload,
      };
    case "ADMIN_DEPOSITE_MANAGE_SUCCESS":
      return {
        loading: false,
        depositStatus: action.payload,
      };
    case "ADMIN_DEPOSITE_MANAGE_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
