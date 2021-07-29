export const createAdreducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_AD_REQUEST":
      return {
        loading: true,
        adDetails: action.payload,
      };
    case "CREATE_AD_SUCCESS":
      return {
        loading: false,
        adDetails: action.payload,
      };
    case "CREATE_AD_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getAdsReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ADS_REQUEST":
      return {
        loading: true,
        adDetails: action.payload,
      };
    case "GET_ADS_SUCCESS":
      return {
        loading: false,
        adDetails: action.payload,
      };
    case "GET_ADS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const deleteAdReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_AD_REQUEST":
      return {
        loading: true,
        adDetails: action.payload,
      };
    case "DELETE_AD_SUCCESS":
      return {
        loading: false,
        deletedAd: action.payload,
      };
    case "DELETE_AD_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getAdbyIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ADS_BY_ID_REQUEST":
      return {
        loading: true,
        adDetails: action.payload,
      };
    case "GET_ADS_BY_ID_SUCCESS":
      return {
        loading: false,
        adDetails: action.payload,
      };
    case "GET_ADS_BY_ID_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getAdbyIdAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ADS_BY_ID_ADMIN_REQUEST":
      return {
        loading: true,
        adDetails: action.payload,
      };
    case "GET_ADS_BY_ID_ADMIN_SUCCESS":
      return {
        loading: false,
        adDetails: action.payload,
      };
    case "GET_ADS_BY_ID_ADMIN_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const editAdReducer = (state = {}, action) => {
  switch (action.type) {
    case "EDIT_AD_REQUEST":
      return {
        loading: true,
        response: action.payload,
      };
    case "EDIT_AD_SUCCESS":
      return {
        loading: false,
        response: action.payload,
      };
    case "EDIT_AD_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const userGetAllAdsReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_GET_ADS_REQUEST":
      return {
        loading: true,
        allAds: action.payload,
      };
    case "USER_GET_ADS_SUCCESS":
      return {
        loading: false,
        allAds: action.payload,
      };
    case "USER_GET_ADS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const watchedAddReducer = (state = {}, action) => {
  switch (action.type) {
    case "WATCHED_AD_REQUEST":
      return {
        loading: true,
        response: action.payload,
      };
    case "WATCHED_AD_SUCCESS":
      return {
        loading: false,
        response: action.payload,
      };
    case "WATCHED_AD_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
