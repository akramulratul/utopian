import axios from "axios";
import { toast } from "react-toastify";

export const addWithdraw = (newWithdrawInfo) => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "ADD_WITHDRAW_REQUEST",
      payload: {},
    });

    fetch("https://api.utopiansglobal.com/user/balance/withdraws", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newWithdrawInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        dispatch({
          type: "ADD_WITHDRAW_SUCCESS",
          payload: data,
        });

        if (data.statusCode !== 201) {
          toast.error(`${data.message}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.success(`${data.message}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  } catch (error) {
    dispatch({
      type: "ADD_WITHDRAW_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getWithdrawHistory = () => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "WITHDRAW_HISTORY_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "https://api.utopiansglobal.com/user/balance/withdraws",
      config
    );
    dispatch({
      type: "WITHDRAW_HISTORY_SUCCESS",
      payload: data.data.data,
    });
  } catch (error) {
    dispatch({
      type: "WITHDRAW_HISTORY_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const sendOtp = () => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "WITHDRAW_OTP_REQUEST",
      payload: {},
    });

    fetch("https://api.utopiansglobal.com/user/balance/withdraws/generate/otp", {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
      console.log(data)
        dispatch({
          type: "WITHDRAW_OTP_SUCCESS",
          payload: data,
        });
      });
  } catch (error) {
    dispatch({
      type: "WITHDRAW_OTP_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
