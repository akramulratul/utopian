import axios from "axios";
import { toast } from "react-toastify";

export const login = (userName, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_LOGIN_REQUEST",
    });

    const userData = {
      password: password,
      username: userName,
    };

    fetch("https://utopain-backend.herokuapp.com/auth/signIn", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "USER_LOGIN_SUCCESS",
          payload: data,
        });
        if (data.statusCode !== 200) {
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
        // });
        console.log(data);

        if (data.statusCode === 200) {
          localStorage.setItem("userInfo", JSON.stringify(data));
        }
      });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: "USER_LOGOUT",
  });
};

export const registerNewUser = (userData, history) => async (dispatch) => {
  console.log(userData);
  try {
    dispatch({
      type: "USER_REGISTRATION_REQUEST",
    });

    fetch("https://utopain-backend.herokuapp.com/auth/signUp", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "USER_REGISTRATION_SUCCESS",
          payload: data,
        });
        if (data.statusCode === 201) {
          toast.success(`${data.message}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
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
        // localStorage.setItem('userInfo', JSON.stringify(data))
      });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "USER_REGISTRATION_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userRegisterOtpVerifyAction =
  (phoneNumber, history) => async (dispatch) => {
    console.log(phoneNumber);
    try {
      dispatch({
        type: "USER_REGISTER_OTP_VERIFY_REQUEST",
      });

      fetch(`http://api.utopiansglobal.com/auth/signUp/generateOtp`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(phoneNumber),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          dispatch({
            type: "USER_REGISTER_OTP_VERIFY_SUCCESS",
            payload: data,
          });
          console.log(data);
          if (data.statusCode === 200) {
            setTimeout(function () {
              history.push("/registration-verify-otp");
            }, 2000);
            toast.success(`${data.message}`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
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
          // localStorage.setItem('userInfo', JSON.stringify(data))
        });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "USER_REGISTER_OTP_VERIFY_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// export const getUserProfile = () => async (dispatch) => {
//     const userInfo = JSON.parse(localStorage.getItem('userInfo'))
//     const { data: { token } } = userInfo
//     console.log(token);
//     try {
//         dispatch({
//           type: "USER_REGISTRATION_SUCCESS",
//           payload: data,
//         });
//         if (data.statusCode !== 201) {
//           toast.error(`${ data.message }`, {
//             position: "top-right",
//             autoClose: 2000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//         } else {
//           toast.success(`${ data.message }`, {
//             position: "top-right",
//             autoClose: 2000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//         }
//         // localStorage.setItem('userInfo', JSON.stringify(data))
//       });
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: "USER_REGISTRATION_FAIL",
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

export const changePassword = (confirmPass) => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "USER_PASSWORDCHANGE_REQUEST",
    });

    fetch("http://api.utopiansglobal.com/auth/changePass", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(confirmPass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "USER_PASSWORDCHANGE_SUCCESS",
          payload: data,
        });
        if (data.statusCode !== 200) {
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
        // });
        console.log(data);
      });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "USER_PASSWORDCHANGE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserProfile = () => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;
  console.log(token);
  try {
    dispatch({
      type: "USER_PROFILEDETAILS_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "https://utopain-backend.herokuapp.com/auth/profile",
      config
    );
    dispatch({
      type: "USER_PROFILEDETAILS_SUCCESS",
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: "USER_PROFILEDETAILS_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userProfileUpdate = (userData) => async (dispatch) => {
  console.log(userData);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;
  try {
    dispatch({
      type: "USER_PROFILE_UPDATE_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    fetch("https://utopain-backend.herokuapp.com/auth/profile", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "USER_PROFILE_UPDATE_SUCCESS",
          payload: data,
        });
        console.log(data);
        if (data.statusCode === 200) {
          toast.success(`${data.message}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
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
      type: "USER_PROFILE_UPDATE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userProfileUpdateByPictureAction = (url) => async (dispatch) => {
  console.log(url);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;
  try {
    dispatch({
      type: "USER_PROFILE_UPDATE_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    fetch(
      `http://api.utopiansglobal.com/auth/profile/uploadProfile?imageLink=${url}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify(userData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "USER_PROFILE_UPDATE_SUCCESS",
          payload: data,
        });
        console.log(data);
        if (data.statusCode === 200) {
          toast.success(`${data.message}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
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
      type: "USER_PROFILE_UPDATE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
