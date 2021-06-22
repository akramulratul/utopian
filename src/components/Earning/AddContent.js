import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import addOne from "../../image/AdsThumbail/add1.svg";
import "../../styles/_Earning.scss";
import { Link } from "react-router-dom";
import ViewAdd from "../Earning/ViewAdd";
import { Route } from "react-router-dom";

const AddContent = () => {
  const [isView, setIsViewed] = useState(false);
  const buttonClicked = () => {
    setIsViewed(!isView);
  };

  return (
    <div className="d-flex ">
      <div className="ml-3 mt-3">
        <Card
          className="shadow-lg p-3 mb-5 bg-white rounded"
          style={{ width: "443px", height: "336px" }}
        >
          <Card.Img variant="top" src={addOne} />
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div className="text-start d-flex mt-1 pt-1">
                <div>
                  <p>Time:30s</p>
                </div>
                <div className="ml-2">
                  <p>Earn:৳10</p>
                </div>
              </div>
              <div>
                <Link to="/viewadd">
                  <Button onClick={buttonClicked} className="btn-ads mt-1">
                    View Ads
                  </Button>
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AddContent;
