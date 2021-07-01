import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddNav from "../Earning/Advertise/AddNav";
import { getAdById } from "../Redux/Actions/adControl";
import Addvertise from "./Advertise/Addvertise";

const ViewAdd = () => {
  const getAdByIdInfo = useSelector((state) => state.getAdById);
  const [isLoading, setIsLoading] = useState(true);
  const { loading, adDetails, error } = getAdByIdInfo;
  const { id } = useParams();
  const dispatch = useDispatch();
  const stopLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    dispatch(getAdById(id));
    stopLoading();
  }, []);
  return (
    <>
      {isLoading ? (
        <h5>Loading Ad...</h5>
      ) : loading ? (
        <h5>Loading Ad...</h5>
      ) : (
        <div className="">
          <AddNav adDetails={adDetails} />
          <Addvertise adDetails={adDetails} />
        </div>
      )}
    </>
  );
};

export default ViewAdd;
