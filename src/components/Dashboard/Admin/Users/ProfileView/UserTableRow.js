import React from "react";

const UserTableRow = ({ title, data }) => {
  return (
    <div className="row p-0 m-0">
      <div className="col-5 border">
        <div className="p-lg-3">
          <strong>{title}</strong>
        </div>
      </div>
      <div className="col-7 border">
        <div className="p-lg-3">
          <small className="text-secondary">{data}</small>
        </div>
      </div>
    </div>
  );
};

export default UserTableRow;
