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
      "http://api.utopiansglobal.com/admin/incentives",
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
