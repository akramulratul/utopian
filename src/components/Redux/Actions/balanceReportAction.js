
import axios from "axios";
export const incentiveBalanceReportHistory = () => async (dispatch) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const {
      data: { token },
    } = userInfo;
  
    try {
      dispatch({
        type: "INCENTIVE_BALANCE_REPORT_HISTORY_REQUEST",
        payload: {},
      });
  
      const config = {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.get(
        "https://api.utopiansglobal.com/transaction/user/statements",
        config
      );
      dispatch({
        type: "INCENTIVE_BALANCE_REPORT_HISTORY_SUCCESS",
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: "INCENTIVE_BALANCE_REPORT_HISTORY_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };