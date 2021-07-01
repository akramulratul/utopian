import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddContent from "./AddContent";
import { userGetAllAds } from "../Redux/Actions/adControl";
const Advertise = () => {
  const dispatch = useDispatch();
  const userGetAds = useSelector((state) => state.userGetAds);
  const { loading, allAds, error } = userGetAds;
  const [isLoading, setIsLoading] = useState(true);
  const stopLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    dispatch(userGetAllAds());
    setIsLoading();
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <h5>Loading Ads...</h5>
      ) : loading ? (
        <h5>Loading Ads...</h5>
      ) : (
        <div className="bg-white row">
          {allAds ? (
            allAds.map((ad) => <AddContent ad={ad} />)
          ) : (
            <h5>There are no created ad on this page</h5>
          )}
        </div>
      )}
    </>
  );
};

export default Advertise;
