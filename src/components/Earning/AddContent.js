import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "../../styles/_Earning.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AddContent = ({ ad }) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState();
  const watchedAdInfo = useSelector((state) => state.watchedAd);
  const { response } = watchedAdInfo;
  const history = useHistory();
  const buttonClicked = (id) => {
    history.push(`/viewad/${id}`);

    // dispatch(watchedAd(id));
    // if (response) {
    //   console.log(response.statusCode);
    //   if (response.statusCode === 200) {
    //     history.push(`/viewad/${id}`);
    //     setErrorMessage("");
    //   } else {
    //     history.push("/earning");
    //     setErrorMessage(
    //       "You have already watched this Ad. Please visit another Ad or wait for the next one."
    //     );
    //   }
    // }
  };

  return (
    <div className="col-lg-4">
      <Card className="shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Img variant="top" src={ad.thumbnailImage} />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div className="text-start d-flex mt-1 pt-1">
              <div>
                <p>Time:{ad.duration / 1000}s</p>
              </div>
              <div className="ml-2">
                <p>Earn: TK {ad.earningMoney}/-</p>
              </div>
            </div>
            <div>
              <Button
                onClick={() => buttonClicked(ad.id)}
                className="btn-ads mt-1"
              >
                View Ads
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
    </div>
  );
};

export default AddContent;
