import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAdminDepositeHistory } from "../../../../Redux/Actions/adminBalanceControlAction";


const WithdrawContant = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const adminDeposit = useSelector((state) => state.adminDeposit);
  const { loading, error, depositInfo } = adminDeposit;
  // console.log(depositInfo.data);
  const { id } = useParams()
  console.log(id);
  const info = depositInfo.data.find(deposit => deposit.id == id)
  console.log(info);

  return (
    <div className="dashboard-container py-5 px-4">
      <div className="row d-flex">

        <div className="col-lg-8">
          <div className="mt-3 bg-white p-4">
            <h4 className="border-bottom">Deposit Details</h4> <br />
            <h6>Txn Id: <span> {info.transactionId}</span></h6><br />
            <h6>Withdrawal Amount: <span>৳{info.depositAmount}</span> </h6> <br />
            <h6>Status: <span>{info.status}</span></h6> <br />
            <h6>Created At: {new Date(info.createdOn).getDate()}/
              {new Date(info.createdOn).getMonth()}/
              {new Date(info.createdOn).getFullYear()}</h6>
          </div>
          <div className="mt-3 bg-white">
            <h4 className="border-bottom p-2">Payment Method : {info.paidBy}</h4>
            <h4 className=" p-2">Phone Number: {info.sendFrom}</h4>
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
