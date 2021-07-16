import React from "react";
import SettingTableRow from "./SettingTableRow";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import TeamIncentive from "./TeamIncentive";
const SettingContent = () => {
  const [show, setShow] = useState(false);
  const [directAmount, setDirectAmount] = useState();
  const [directBonus, setDirectBonus] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    const data = {
      directAmount,
      directBonus,
    };
    console.log(data);
  };

  return (
    <div className="bg-white justify-content-between rounded mt-3 ml-3 mr-3">
      <div>
        <h1>General Settings</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          maxime unde rerum!
        </p>
      </div>
      <div>
        <h1>Incentive Setting</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, est!
        </p>
      </div>
      <div>
        <div className="details-wrapper bg-white">
          <SettingTableRow
            title="Direct Incentive"
            directAmount="Direct Amount"
            setDirectAmount={setDirectAmount}
          />
          <SettingTableRow
            title="Direct Incentive"
            directBonus="Bonus Amount"
            setDirectBonus={setDirectBonus}
          />
        </div>
        <div className="ml-2 mt-3">
          <Button variant="primary" onClick={handleShow}>
            Incentive List
          </Button>{" "}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <div>
        <TeamIncentive />
      </div>
    </div>
  );
};

export default SettingContent;
