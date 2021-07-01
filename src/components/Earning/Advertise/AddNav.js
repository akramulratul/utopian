import React from "react";
import toggleIcon from "../../../image/icons/toggle nav icon.svg";
import useCountDown from "react-countdown-hook";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { watchedAd } from "../../Redux/Actions/adControl";

const AddNav = ({ adDetails }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const initialTime = adDetails.duration; // initial time in milliseconds, defaults to 60000
  const interval = 1000;
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(
    initialTime,
    interval
  );
  React.useEffect(() => {
    start();
  }, []);
  const closeAdd = (id) => {
    dispatch(watchedAd(id));
    setTimeout(() => {
      history.push("/earning");
    }, 2000);
  };
  return (
    <div className="bg-white  px-4 py-3 d-flex justify-content-between">
      <div className="left-content d-flex align-content-between">
        <div className="toogle-b pr-3">
          <img src={toggleIcon} alt="" />
        </div>
        <div className="logo px-lg-5">
          <Link to="/">
            <h3>UtoPian</h3>
          </Link>
        </div>
      </div>
      <div className="right-content d-flex align-items-center">
        <div className="px-3">
          <h4>Remaining Time</h4>
        </div>
        <div className="d-flex">
          <div className="border px-2 pt-2 mx-2 border-1">
            <h4>{timeLeft / 1000}</h4>
          </div>
        </div>
        <div className="mr-2">
          <h3>Seconds</h3>
        </div>

        {timeLeft === 0 ? (
          <button
            onClick={() => closeAdd(adDetails.id)}
            className="btn btn-brand pt-2 ml-lg-5"
          >
            <h6>Close</h6>
          </button>
        ) : (
          <button className="btn disabled btn-brand pt-2 ml-lg-5">
            <h6>Close</h6>
          </button>
        )}
      </div>
    </div>
  );
};

export default AddNav;
