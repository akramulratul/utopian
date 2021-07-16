import React from "react";
import SettingTableRow from "./SettingTableRow";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import TeamIncentive from "./TeamIncentive";
import PromotionalPopup from "./PromotionalPopup";
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
        <h3>General Settings</h3>
        <p>You can select your all manual features here.</p>
      </div>
      <div>
        <h3>Incentive Setting</h3>
        <p>You can select direct incentive and deposit amount manually</p>
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
          <Button
            className="btn-update border-0 py-2 px-5 mt-3"
            variant="primary"
            onClick={handleShow}
          >
            Incentive List
          </Button>{" "}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Incentive List</Modal.Title>
            </Modal.Header>
            <Modal.Body>Incentive list will be here</Modal.Body>
            <Modal.Footer>
              <Button
                className="btn-update border-0 py-2 px-5 mt-3"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                className="btn-update border-0 py-2 px-5 mt-3"
                onClick={handleSubmit}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <div>
        <TeamIncentive />
      </div>
      <div>
        <PromotionalPopup />
      </div>
      <div className="justify-content-end">
        {" "}
        <Button className="btn-update border-0 py-2 px-5 mt-3">
          Save
        </Button>{" "}
        <Button className="btn-update border-0 py-2 px-5 mt-3">Reset</Button>{" "}
      </div>
    </div>
  );
};

export default SettingContent;
