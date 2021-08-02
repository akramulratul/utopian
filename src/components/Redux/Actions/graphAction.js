import axios from "axios";

export const graphAction = () => async (dispatch) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;
  console.log(token);
  try {
    dispatch({
      type: "GRAPH_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

        const { data } = await axios.get("http://api.utopiansglobal.com/dashboard/user/graph",
            config
        );
        dispatch({
            type: "GRAPH_SUCCESS",
            payload: data.data,
        });
    } catch (error) {
        dispatch({
            type: "GRAPH_FAIL",
            payload:
            
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
