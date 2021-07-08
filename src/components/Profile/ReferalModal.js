import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ReferalModal = ({ userInfo, modalCloseHandler }) => {
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);
  const refUrl = `http://utopiansglobal.com/getSignUp/referral/${userInfo.referralId}`;

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Referral Link</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h6 className="text-primary">
            <b>{refUrl}</b>
          </h6>
          <CopyToClipboard text={refUrl} onCopy={() => setCopied(true)}>
            <button className="btn-brand px-3 py-1 mt-3">
              Copy to clipboard
            </button>
          </CopyToClipboard>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={modalCloseHandler} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ReferalModal;
