import axios from "axios";
import { toast } from "react-toastify";

export const createAd = (adInfo, thumbnail) => async (dispatch, getState) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;
  try {
    dispatch({
      type: "CREATE_AD_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const postAd = async (imageUrl) => {
      const adData = {
        duration: adInfo.duration,
        earningMoney: adInfo.earningMoney,
        status: "Active",
        title: adInfo.title,
        videoUrl: adInfo.videoUrl,
        thumbnailImage: imageUrl,
      };
      const { data } = await axios.post(
        "https://utopain-backend.herokuapp.com/admin/ads",
        adData,
        config
      );
      dispatch({
        type: "CREATE_AD_SUCCESS",
        payload: data.data,
      });
    };

    const newData = new FormData();
    newData.append("file", thumbnail);
    newData.append("upload_preset", "iypf1xxa");
    newData.append("cloud_name", "utopiansglobal");
    fetch("https://api.cloudinary.com/v1_1/utopiansglobal/image/upload", {
      method: "post",
      body: newData,
    })
      .then((res) => res.json())
      .then((data) => {
        postAd(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    dispatch({
      type: "CREATE_AD_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getAds = () => async (dispatch, getState) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  const config = {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };
  try {
    dispatch({
      type: "GET_ADS_REQUEST",
      payload: {},
    });

    const response = await axios.get(
      `https://utopain-backend.herokuapp.com/admin/ads`,
      config
    );
    dispatch({
      type: "GET_ADS_SUCCESS",
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_ADS_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteAd = (id) => async (dispatch, getState) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;
  try {
    dispatch({
      type: "DELETE_AD_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.delete(
      `https://utopain-backend.herokuapp.com/admin/ads/${id}`,
      config
    );
    dispatch({
      type: "DELETE_AD_SUCCESS",
      payload: response.data,
    });
    if (response.data.statusCode === 200) {
      window.location.reload();
    }
  } catch (error) {
    dispatch({
      type: "DELETE_AD_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAdById = (adId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "GET_ADS_BY_ID_REQUEST",
      payload: {},
    });

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const {
      data: { token },
    } = userInfo;

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `https://utopain-backend.herokuapp.com/users/ads?adId=${adId}`,
      config
    );

    dispatch({
      type: "GET_ADS_BY_ID_SUCCESS",
      payload: response.data.data[0],
    });
    console.log(response.data.data[0]);
  } catch (error) {
    dispatch({
      type: "GET_ADS_BY_ID_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAdByIdAdmin = (adId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "GET_ADS_BY_ID_ADMIN_REQUEST",
      payload: {},
    });

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const {
      data: { token },
    } = userInfo;

    const config = {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `https://utopain-backend.herokuapp.com/admin/ads/${adId}`,
      config
    );

    dispatch({
      type: "GET_ADS_BY_ID_ADMIN_SUCCESS",
      payload: response.data.data,
    });
    console.log(response.data.data);
  } catch (error) {
    dispatch({
      type: "GET_ADS_BY_ID_ADMIN_FAILED",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const editAdAction =
  (id, adInfo, thumbnail) => async (dispatch, getState) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const {
      data: { token },
    } = userInfo;
    try {
      dispatch({
        type: "EDIT_AD_REQUEST",
        payload: {},
      });

      const config = {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      };

      const postAd = async (imageUrl) => {
        const adData = {
          duration: adInfo.duration,
          earningMoney: adInfo.earningMoney,
          status: "Active",
          title: adInfo.title,
          videoUrl: adInfo.videoUrl,
          thumbnailImage: imageUrl,
        };
        const { data } = await axios.put(
          `https://utopain-backend.herokuapp.com/admin/ads/${id}`,
          adData,
          config
        );
        dispatch({
          type: "EDIT_AD_SUCCESS",
          payload: data.data,
        });
        console.log("ok");
      };

      if (!adInfo.thumbnailImage && thumbnail) {
        const newData = new FormData();
        newData.append("file", thumbnail);
        newData.append("upload_preset", "iypf1xxa");
        newData.append("cloud_name", "utopiansglobal");
        fetch("https://api.cloudinary.com/v1_1/utopiansglobal/image/upload", {
          method: "post",
          body: newData,
        })
          .then((res) => res.json())
          .then((data) => {
            postAd(data.url);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        postAd(adInfo.thumbnailImage);
      }
    } catch (error) {
      dispatch({
        type: "EDIT_AD_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const userGetAllAds = () => async (dispatch, getState) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;

  const config = {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };
  try {
    dispatch({
      type: "USER_GET_ADS_REQUEST",
      payload: {},
    });

    const response = await axios.get(
      `https://utopain-backend.herokuapp.com/users/ads`,
      config
    );

    dispatch({
      type: "USER_GET_ADS_SUCCESS",
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: "USER_GET_ADS_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const watchedAd = (id) => async (dispatch, getState) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {
    data: { token },
  } = userInfo;
  try {
    dispatch({
      type: "WATCHED_AD_REQUEST",
      payload: {},
    });

    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`https://utopain-backend.herokuapp.com/users/ads/watch/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "WATCHED_AD_SUCCESS",
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
      });

    console.log("adDetails");
  } catch (error) {
    dispatch({
      type: "WATCHED_AD_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
