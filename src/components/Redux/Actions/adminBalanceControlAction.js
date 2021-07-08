import axios from "axios";

export const getAdminDepositeHistory = () => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "ADMIN_DEPOSITE_HISTORY_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "http://api.utopiansglobal.com/admin/balance/deposits",
      config
    );
    dispatch({
      type: "ADMIN_DEPOSITE_HISTORY_SUCCESS",
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: "ADMIN_DEPOSITE_HISTORY_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adminDepositeManageAction = (depositData) => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "ADMIN_DEPOSITE_MANAGE_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    const statusData = {
      status: depositData.status,
    };

    const { data } = await axios.post(
      `http://api.utopiansglobal.com/admin/balance/deposits/${depositData.id}/manage`,
      statusData,
      config
    );
    dispatch({
      type: "ADMIN_DEPOSITE_MANAGE_SUCCESS",
      payload: data.data,
    });
    if (data.data) {
      window.location.reload();
    }
  } catch (error) {
    dispatch({
      type: "ADMIN_DEPOSITE_MANAGE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAdminWithdrawHistory = () => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "ADMIN_WITHDRAW_HISTORY_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "http://api.utopiansglobal.com/admin/balance/withdraws",
      config
    );
    dispatch({
      type: "ADMIN_WITHDRAW_HISTORY_SUCCESS",
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: "ADMIN_WITHDRAW_HISTORY_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adminWithdrawManageAction = (withdrawData) => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "ADMIN_WITHDRAW_MANAGE_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    const statusData = {
      status: withdrawData.status,
    };

    const { data } = await axios.post(
      `https://utopain-backend.herokuapp.com
/admin/balance/withdraws/${withdrawData.id}/manage`,
      statusData,
      config
    );
    dispatch({
      type: "ADMIN_WITHDRAW_MANAGE_SUCCESS",
      payload: data.data,
    });
    if (data.data) {
      window.location.reload();
    }
  } catch (error) {
    dispatch({
      type: "ADMIN_WITHDRAW_MANAGE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
