import React from "react";
import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter "
          className="text-center"
        >
          Notice
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h4>Sorry, We're experiencing technical difficulties.</h4>
          <p>
            For Technical difficulties we are compelled to off this site. It
            will take a few times.
          </p>
          <p>
            <b>We Will Meet Soon</b>
          </p>
          <p>Thanks, For being with us</p>
        </div>
        <>
          <div>
            <h4>দুঃখিত, আমাদের প্রযুক্তিগত সমস্যার জন্য </h4>
            <p>
              আমরা প্রযুক্তিগত সমস্যার কারনে ওয়েবসাইটটি সীমিত সময়ের জন্য বন্ধ
              রাখতেছি ,
            </p>
            <p>
              <b>অতি শিঘ্রই আমরা আবার ফিরে আসব।</b>
            </p>
            <p>ধন্যবাদ , আমাদের সাথে থাকার জন্য ।</p>
          </div>
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
