import axios from "axios";
// import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const forgetPasswordByPhoneNumber =
  (forgetData, history) => async (dispatch) => {
    try {
      dispatch({
        type: "FORGETPASSWORD_PHONENUMBER_REQUEST",
        payload: {},
      });

      fetch("https://utopain-backend.herokuapp.com/forgetPass/generateOtp", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(forgetData),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "FORGETPASSWORD_PHONENUMBER_SUCCESS",
            payload: data,
          });
          console.log(data);

          if (data.statusCode == 201) {
            toast.success(`${data.message}`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            // history.push('/confirm-password')
            setTimeout(function () {
              history.push("/verify-otp");
            }, 2000);
          } else {
            toast.error(`${data.message}`, {
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
        type: "FORGETPASSWORD_PHONENUMBER_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const forgetPasswordByVerifyOtp =
  (forgetData, history) => async (dispatch) => {
    try {
      dispatch({
        type: "FORGETPASSWORD_VERIFYOTP_REQUEST",
        payload: {},
      });

      fetch("https://utopain-backend.herokuapp.com/forgetPass/verifyOTP", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(forgetData),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "FORGETPASSWORD_VERIFYOTP_SUCCESS",
            payload: data,
          });
          console.log(data);

          if (data.statusCode == 200) {
            toast.success(`${data.message}`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            // history.push('/confirm-password')
            setTimeout(function () {
              history.push("/confirm-password");
            }, 2000);
          } else {
            toast.error(`${data.message}`, {
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
        type: "FORGETPASSWORD_VERIFYOTP_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const confirmPasswordAction =
  (confirmDataInfo, history) => async (dispatch) => {
    try {
      dispatch({
        type: "CONFIRMPASSWORD_REQUEST",
        payload: {},
      });

      fetch("https://utopain-backend.herokuapp.com/forgetPass/changePass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(confirmDataInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "CONFIRMPASSWORD_SUCCESS",
            payload: data,
          });
          console.log(data);

          if (data.statusCode == 200) {
            toast.success(`${data.message}`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            // history.push('/confirm-password')
            setTimeout(function () {
              history.push("/login");
            }, 2000);
          } else {
            toast.error(`${data.message}`, {
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
        type: "CONFIRMPASSWORD_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
