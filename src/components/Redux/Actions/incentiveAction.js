import axios from "axios";
import { toast } from "react-toastify";

export const incentiveHistoryAction = () => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "INCENTIVE_HISTORY_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "https://api.utopiansglobal.com/admin/incentives",
      config
    );
    dispatch({
      type: "INCENTIVE_HISTORY_SUCCESS",
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: "INCENTIVE_HISTORY_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adminIncentiveApproved = (approvedData) => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "ADMIN_INCENTIVE_APPROVED_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    const statusData = {
      status: approvedData.status,
    };

    const { data } = await axios.post(
      `https://api.utopiansglobal.com/admin/incentives/${approvedData.id}/manage`,
      statusData,
      config
    );
    console.log(data);
    dispatch({
      type: "ADMIN_INCENTIVE_APPROVED_SUCCESS",
      payload: data.data,
    });
    if (data.data) {
      window.location.reload();
    }
  } catch (error) {
    dispatch({
      type: "ADMIN_INCENTIVE_APPROVED_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adminIncentiveDecline = (declineData) => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "ADMIN_INCENTIVE_DECLINE_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    const statusData = {
      status: declineData.status,
    };

    const { data } = await axios.post(
      `https://api.utopiansglobal.com/admin/incentives/${declineData.id}/manage`,
      statusData,
      config
    );
    console.log(data);
    dispatch({
      type: "ADMIN_INCENTIVE_DECLINE_SUCCESS",
      payload: data.data,
    });
    if (data.data) {
      window.location.reload();
    }
  } catch (error) {
    dispatch({
      type: "ADMIN_INCENTIVE_DECLINE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const incentiveTeamHistoryAction = () => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "INCENTIVE_HISTORY_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "https://api.utopiansglobal.com/admin/teamIncentives",
      config
    );
    dispatch({
      type: "INCENTIVE_HISTORY_SUCCESS",
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: "INCENTIVE_HISTORY_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adminTeamIncentiveApproved =
  (approvedData) => async (dispatch) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const {
      data: { token },
    } = userInfo;

    try {
      dispatch({
        type: "ADMIN_INCENTIVE_APPROVED_REQUEST",
        payload: {},
      });

      const config = {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      };
      const statusData = {
        status: approvedData.status,
      };

      const { data } = await axios.post(
        `https://api.utopiansglobal.com/admin/teamIncentives/${approvedData.id}/manage`,
        statusData,
        config
      );
      console.log(data);
      dispatch({
        type: "ADMIN_INCENTIVE_APPROVED_SUCCESS",
        payload: data.data,
      });
      if (data.data) {
        window.location.reload();
      }
    } catch (error) {
      dispatch({
        type: "ADMIN_INCENTIVE_APPROVED_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const adminTeamIncentiveDecline = (declineData) => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "ADMIN_INCENTIVE_DECLINE_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    const statusData = {
      status: declineData.status,
    };

    const { data } = await axios.post(
      `https://api.utopiansglobal.com/admin/teamIncentives/${declineData.id}/manage`,
      statusData,
      config
    );
    console.log(data);
    dispatch({
      type: "ADMIN_INCENTIVE_DECLINE_SUCCESS",
      payload: data.data,
    });
    if (data.data) {
      window.location.reload();
    }
  } catch (error) {
    dispatch({
      type: "ADMIN_INCENTIVE_DECLINE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Admin_salaries
export const salariesHistoryAction = () => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "INCENTIVE_HISTORY_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "https://api.utopiansglobal.com/admin/salaries",
      config
    );
    dispatch({
      type: "INCENTIVE_HISTORY_SUCCESS",
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: "INCENTIVE_HISTORY_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const salaryApproved = (approvedData) => async (dispatch) => {
  console.log(approvedData);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "ADMIN_INCENTIVE_APPROVED_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    const statusData = {
      status: approvedData.status,
    };

    const { data } = await axios.post(
      `https://api.utopiansglobal.com/admin/salaries/${approvedData.id}/manage`,
      statusData,
      config
    );
    console.log(data);
    dispatch({
      type: "ADMIN_INCENTIVE_APPROVED_SUCCESS",
      payload: data.data,
    });
    if (data.data) {
      window.location.reload();
    }
  } catch (error) {
    dispatch({
      type: "ADMIN_INCENTIVE_APPROVED_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const salaryDecline = (declineData) => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "ADMIN_INCENTIVE_DECLINE_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    const statusData = {
      status: declineData.status,
    };

    const { data } = await axios.post(
      `https://api.utopiansglobal.com/admin/salaries/${declineData.id}/manage`,
      statusData,
      config
    );
    console.log(data);
    dispatch({
      type: "ADMIN_INCENTIVE_DECLINE_SUCCESS",
      payload: data.data,
    });
    if (data.data) {
      window.location.reload();
    }
  } catch (error) {
    dispatch({
      type: "ADMIN_INCENTIVE_DECLINE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// user incentive
export const userIncentiveHistory = () => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "INCENTIVE_HISTORY_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "https://api.utopiansglobal.com/admin/incentives",
      config
    );
    dispatch({
      type: "INCENTIVE_HISTORY_SUCCESS",
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: "INCENTIVE_HISTORY_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
