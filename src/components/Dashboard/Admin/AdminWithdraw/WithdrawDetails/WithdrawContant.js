import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
const WithdrawContant = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="dashboard-container py-5 px-4">
      <div className="row d-flex">
        <div className="col-lg-8">
          <div className="mt-3 bg-white">
            <h4 className="border-bottom">Withdrawal Details</h4>
            <h6>Txn Id:txn-123432434354443</h6>
            <h6>Withdrawal Amount:৳45000.00 </h6>
            <h6>Status:pending</h6>
            <h6>Created At:12 jun 2021</h6>
          </div>
          <div className="mt-3 bg-white">
            <h4 className="border-bottom">Payment Method</h4>
            <h6>Phone Number:</h6>
          </div>
        </div>
        <div className="col-lg-4 admin-right-area bg-white">
          <div>
            <h4 className="border-bottom">Withdrawal By</h4>
            <h6>USER</h6>
          </div>
          <div>
            <Button className="btn btn-brand w-100 py-2 mt-2">
              <h6>Approve</h6>
            </Button>
            <Button
              className="btn btn-brand w-100 py-2 mt-2 button-decline "
              onClick={handleShow}
            >
              <h6>Decline</h6>
            </Button>
          </div>
          <div>
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Are you confirm?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                You want to Decline This withdrawal. if you confirm then press
                the decline button.
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="button-decline"
                  variant="secondary"
                  onClick={handleClose}
                >
                  Decline
                </Button>
                <Button
                  className="btn w-250"
                  variant="primary"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawContant;
