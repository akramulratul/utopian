import React from "react";
import SettingTableRow from "./SettingTableRow";

const SettingContent = () => {
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
        <div className="details-wrapper bg-white">
          <SettingTableRow title="App Name" data="Utopian" />
          <SettingTableRow title="Logo" file="hhhg" />
          <SettingTableRow title="Favicon" file="hgt" />
          <SettingTableRow title="Copyright Text" data="copyright" />
          <SettingTableRow title="About" data="jiuhg" />
          <SettingTableRow title="Address" data="uyhgf" />
          <SettingTableRow title="City" data="tgfrde" />
          <SettingTableRow title="Country" data="Bangladesh" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SettingContent;
