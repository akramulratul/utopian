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
    console.log(data);
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
