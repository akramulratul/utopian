import React from "react";
import SettingTableRow from "./SettingTableRow";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const TeamIncentive = () => {
  const [show, setShow] = useState(false);
  const [TeamAmount, setTeamAmount] = useState();
  const [TeamBonus, setTeamBonus] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    const data = {
      TeamAmount,
      TeamBonus,
    };
    console.log(data);
  };
  return (
    <div className="bg-white justify-content-between rounded mt-3 ml-3 mr-3">
      <div>
        <h1>Team Incentive Setting</h1>
        <p>You can manually create your team incentive</p>
      </div>
      <div>
        <div className="details-wrapper bg-white">
          <SettingTableRow
            title="Team Incentive"
            TeamAmount="Team Amount"
            setTeamAmount={setTeamAmount}
          />
          <SettingTableRow
            title="Team Incentive"
            TeamBonus="Bonus Amount"
            setTeamBonus={setTeamBonus}
          />
        </div>
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
            <Modal.Title>Team incentive list</Modal.Title>
          </Modal.Header>
          <Modal.Body>Team incentive list will be here</Modal.Body>
          <Modal.Footer>
            <Button
              className="btn-update border-0 py-2 px-5 mt-3"
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              className="btn-update border-0 py-2 px-5 mt-3"
              variant="primary"
              onClick={handleSubmit}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default TeamIncentive;
