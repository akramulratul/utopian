export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        loading: true,
        userInfo: action.payload,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        loading: false,
        userInfo: action.payload,
      };
    case "USER_LOGIN_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    case "USER_LOGOUT":
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTRATION_REQUEST":
      return {
        loading: true,
      };
    case "USER_REGISTRATION_SUCCESS":
      return {
        loading: false,
        userInfo: action.payload,
      };
    case "USER_REGISTRATION_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getUserProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_PROFILEDETAILS_REQUEST":
      return {
        loading: true,
        userInfo: action.payload,
      };
    case "USER_PROFILEDETAILS_SUCCESS":
      return {
        loading: false,
        userInfo: action.payload,
      };
    case "USER_PROFILEDETAILS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


export const passwordChangeReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_PASSWORDCHANGE_REQUEST":
      return {
        loading: true, response: action.payload
      }
    case "USER_PASSWORDCHANGE_SUCCESS":
      return {
        loading: false, response: action.payload

      }
    case "USER_PASSWORDCHANGE_FAIL":
      return {
        loading: false, error: action.payload
      }
    default:
      return state;
  }


}
export const updateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_PROFILE_UPDATE_REQUEST":
      return {
        loading: true,
        userInfo: action.payload,
      };
    case "USER_PROFILE_UPDATE_SUCCESS":
      return {
        loading: false,
        userInfo: action.payload,
      };
    case "USER_PROFILE_UPDATE_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
