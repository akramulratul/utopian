import React from "react";
import Logo from "../../../../image/logo.svg";
const SettingTableRow = ({ title, data, file }) => {
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
        <div className="p-lg-3 ">
          <div class="custom-file d-flex">
            <img src={Logo} alt="" />
            <input type="file" className="custom-file-input" id="customFile">
              {file}
            </input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingTableRow;
