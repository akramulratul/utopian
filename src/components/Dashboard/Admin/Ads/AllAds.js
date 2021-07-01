import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { deleteAd, getAds } from "../../../Redux/Actions/adControl";
import DashboardNav from "../../DashboardNav";
import AdminSidebar from "../AdminSidebar";
import AdCard from "./AdCard";

const CreateAds = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch();
  const getAdsInfo = useSelector((state) => state.getAds);
  const { loading, adDetails, error } = getAdsInfo;

  const { deletedAd } = useSelector((state) => state.deleteAd);

  const stopLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    dispatch(getAds());
    stopLoading();
  }, [dispatch]);

  const deleteHandler = (id) => {
    dispatch(deleteAd(id));
  };

  console.log(adDetails);
  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-lg-3 p-0 m-0">
          <AdminSidebar />
        </div>
        <div className="col-lg-9 p-0 m-0 witdraw-background">
          <div>
            <DashboardNav />
          </div>
          <div className="row m-0 p-0">
            {isLoading ? (
              <p>Loading Ads...</p>
            ) : loading ? (
              <p>Loading Ads...</p>
            ) : (
              adDetails &&
              adDetails.map((ads) => (
                <AdCard adInfo={ads} deleteHandler={deleteHandler} />
              ))
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CreateAds;
