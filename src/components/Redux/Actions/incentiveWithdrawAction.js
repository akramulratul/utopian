import axios from "axios";
import { toast } from "react-toastify";

export const incentiveAddWithdraw = (newWithdrawInfo,withdrawType) => async (dispatch) => {
  console.log(newWithdrawInfo,withdrawType)
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "ADD_WITHDRAW_REQUEST",
      payload: {},
    });

    fetch(`http://api.utopiansglobal.com/user/balance/withdraws?withdrawType=${withdrawType}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newWithdrawInfo),
    })
      .then((res) => res.json())
      .then((data) => {
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


export const incentiveSendOtp = () => async (dispatch) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const {
      data: { token },
    } = userInfo;
  
    try {
      dispatch({
        type: "WITHDRAW_OTP_REQUEST",
        payload: {},
      });
  
      fetch("http://api.utopiansglobal.com/user/balance/withdraws/generate/otp", {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
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