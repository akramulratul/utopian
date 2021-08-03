import axios from "axios";
import { toast } from "react-toastify";

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
      "https://utopain-backend.herokuapp.com/dashboard/admin",
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
      "https://utopain-backend.herokuapp.com/profile/admin/users",
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
      `https://utopain-backend.herokuapp.com/profile/admin/users?userName=${username}`,
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

// export const adminUserSuspendAction = (username) => async (dispatch) => {
//   const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//   const {
//     data: { token },
//   } = userInfo;

//   try {
//     dispatch({
//       type: "ADMIN_USER_SUSPEND_REQUEST",
//       payload: {},
//     });

//     const config = {
//       headers: {
//         "content-type": "application/json",
//         authorization: `Bearer ${token}`,
//       },
//     };

//     const { data } = await axios.get(
//       `https://utopain-backend.herokuapp.com/auth/ban/${username}`,
//       config
//     );
//     dispatch({
//       type: "ADMIN_USER_SUSPEND_SUCCESS",
//       payload: data.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: "ADMIN_USER_SUSPEND_FAIL",
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

export const adminUserSuspendAction = (username) => async (dispatch) => {
  console.log(username);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;
  try {
    dispatch({
      type: "ADMIN_USER_SUSPEND_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    fetch(`https://utopain-backend.herokuapp.com/auth/admin/ban/${username}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "ADMIN_USER_SUSPEND_SUCCESS",
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
      type: "ADMIN_USER_SUSPEND_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adminUserTemporarySuspendAction =
  (username) => async (dispatch) => {
    console.log(username);
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const {
      data: { token },
    } = userInfo;
    try {
      dispatch({
        type: "ADMIN_USER_TEMPORARY_SUSPEND_REQUEST",
        payload: {},
      });

      const config = {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      };

      fetch(
        `https://utopain-backend.herokuapp.com/auth/admin/tempBan/${username}`,
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
            type: "ADMIN_USER_TEMPORARY_SUSPEND_SUCCESS",
            payload: data,
          });
          console.log(data.statusCode);
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
        type: "ADMIN_USER_TEMPORARY_SUSPEND_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
