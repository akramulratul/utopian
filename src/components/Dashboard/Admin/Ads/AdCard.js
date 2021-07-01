import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AdCard = ({ adInfo, deleteHandler }) => {
  const history = useHistory();
  const editAdHandler = (id) => {
    history.push(`/admin/editAd/${id}`);
  };
  return (
    <div className="col-lg-3 m-0 p-0">
      <Card className="p-3" style={{ width: "100%" }}>
        <Card.Img variant="top" src={adInfo.thumbnailImage} />
        <Card.Body>
          <Card.Title>{adInfo.title}</Card.Title>
          <button variant="primary" onClick={() => editAdHandler(adInfo.id)}>
            Edit Ad
          </button>
          <button
            className="btn-danger"
            onClick={() => deleteHandler(adInfo.id)}
          >
            Delete
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdCard;
