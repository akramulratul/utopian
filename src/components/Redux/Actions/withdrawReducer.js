import axios from "axios";
import { toast } from "react-toastify";

export const addWithdraw = () => async (dispatch) => {
  const withdraw = JSON.parse(sessionStorage.getItem("Withdrawal"));
  const withdrawInfo = {
    amount: parseInt(withdraw.Amount),
    contactNo: withdraw.number,
    withdrawMethod: withdraw.method,
  };
  console.log(withdrawInfo);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "ADD_WITHDRAW_REQUEST",
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
        "http://api.utopiansglobal.com/user/balance/withdraws",
        withdrawInfo,
        config
      )
      .then((response) => {
        dispatch({
          type: "ADD_WITHDRAW_SUCCESS",
          payload: response.data,
        });
        console.log(response);
        if (response.data.statusCode !== 201) {
          toast.error(`${response.data.message}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.success(`${response.data.message}`, {
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
      "http://api.utopiansglobal.com/user/balance/withdraws",
      config
    );
    dispatch({
      type: "WITHDRAW_HISTORY_SUCCESS",
      payload: data.data,
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
