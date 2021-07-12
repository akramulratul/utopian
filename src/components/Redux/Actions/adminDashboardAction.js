import axios from "axios";

export const adminDashboardHistory = () => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "ADMINDASHBOARD_HISTORY_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "http://api.utopiansglobal.com/dashboard/admin",
      config
    );
    dispatch({
      type: "ADMINDASHBOARD_HISTORY_SUCCESS",
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: "ADMINDASHBOARD_HISTORY_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adminUserListAction = () => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "ADMIN_ALL_USER_LIST_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "http://api.utopiansglobal.com/auth/profile/admin/users",
      config
    );
    dispatch({
      type: "ADMIN_ALL_USER_LIST_SUCCESS",
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: "ADMIN_ALL_USER_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adminUserDetailsListAction = (username) => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "ADMIN_USER_LIST_DETAILS_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      `http://api.utopiansglobal.com/auth/profile/admin/users?userName=${username}`,
      config
    );
    dispatch({
      type: "ADMIN_USER_LIST_DETAILS_SUCCESS",
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: "ADMIN_USER_LIST_DETAILS_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

