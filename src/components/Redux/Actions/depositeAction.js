import axios from "axios";
import { toast } from "react-toastify";

export const addDeposit = (addDepositeData) => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;
  console.log(addDepositeData);
  try {
    dispatch({
      type: "ADD_DEPOSITE_REQUEST",
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
        "https://utopain-backend.herokuapp.com/user/balance/deposits",
        addDepositeData,
        config
      )
      .then((response) => {
        dispatch({
          type: "ADD_DEPOSITE_SUCCESS",
          payload: response.data,
        });
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
      type: "ADD_DEPOSITE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getDepositeHistory = () => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "DEPOSITE_HISTORY_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "https://utopain-backend.herokuapp.com/user/balance/deposits",
      config
    );
    dispatch({
      type: "DEPOSITE_HISTORY_SUCCESS",
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: "DEPOSITE_HISTORY_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
