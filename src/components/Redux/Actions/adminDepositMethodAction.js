import axios from "axios";
import { toast } from "react-toastify";

export const depositMethodAction = (depositOption) => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;
  console.log(depositOption);
  try {
    dispatch({
      type: "DEPOSIT_METHOD_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    axios
      .post(
        "https://utopain-backend.herokuapp.com/deposit/admin/options",
        depositOption,
        config
      )
      .then((response) => {
        dispatch({
          type: "DEPOSIT_METHOD_SUCCESS",
          payload: response.data,
        });
        if (response.data.statusCode === 201) {
          toast.success(`${response.data.message}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error(`${response.data.message}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        console.log(response.data);
      });
  } catch (error) {
    dispatch({
      type: "DEPOSIT_METHOD_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getDepositMethodHistory = () => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;
  console.log(token);
  try {
    dispatch({
      type: "DEPOSIT_METHOD_HISTORY_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "https://utopain-backend.herokuapp.com/deposit/admin/options",
      config
    );
    dispatch({
      type: "DEPOSIT_METHOD_HISTORY_SUCCESS",
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: "DEPOSIT_METHOD_HISTORY_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateDepositMethodHistory =
  (depositMethodInfo) => async (dispatch) => {
    console.log(depositMethodInfo);
    console.log(depositMethodInfo.id);
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const {
      data: { token },
    } = userInfo;
    try {
      dispatch({
        type: "DEPOSIT_METHOD_HISTORY_UPDATE_REQUEST",
        payload: {},
      });

      const config = {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      };

      fetch(
        `https://utopain-backend.herokuapp.com/deposit/admin/options/${depositMethodInfo.id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(depositMethodInfo),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "DEPOSIT_METHOD_HISTORY_UPDATE_SUCCESS",
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
        type: "DEPOSIT_METHOD_HISTORY_UPDATE_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteDepositMethodHistory = (id) => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;
  try {
    dispatch({
      type: "DELETE_DEPOSIT_METHOD_HISTORY_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    fetch(`https://utopain-backend.herokuapp.com/deposit/admin/options/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "DELETE_DEPOSIT_METHOD_HISTORY_SUCCESS",
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
          window.location.reload();
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
      type: "DELETE_DEPOSIT_METHOD_HISTORY_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
