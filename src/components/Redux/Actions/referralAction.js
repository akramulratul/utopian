import axios from "axios";

export const referralAction = () => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  try {
    dispatch({
      type: "GET_REFERRAL_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "http://api.utopiansglobal.com/profile/referrals",
      config
    );
    dispatch({
      type: "GET_REFERRAL_SUCCESS",
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_REFERRAL_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
