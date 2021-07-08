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

export const adminWithdrawHistoryReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADMIN_WITHDRAW_HISTORY_REQUEST":
      return {
        loading: true,
        withdrawInfo: action.payload,
      };
    case "ADMIN_WITHDRAW_HISTORY_SUCCESS":
      return {
        loading: false,
        withdrawInfo: action.payload,
      };
    case "ADMIN_WITHDRAW_HISTORY_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const adminWithdrawManageReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADMIN_WITHDRAW_MANAGE_REQUEST":
      return {
        loading: true,
        withdrawStatus: action.payload,
      };
    case "ADMIN_WITHDRAW_MANAGE_SUCCESS":
      return {
        loading: false,
        withdrawStatus: action.payload,
      };
    case "ADMIN_WITHDRAW_MANAGE_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
