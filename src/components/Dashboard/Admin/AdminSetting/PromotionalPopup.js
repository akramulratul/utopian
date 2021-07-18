import React from "react";
import SettingTableRow from "./SettingTableRow";

const PromotionalPopup = () => {
  return (
    <div className="mt-3 bg-white details-wrapper">
      <h1>Other Setting</h1>
      <SettingTableRow title="Promotional PopUp" toggle="Active" />
      <SettingTableRow title="Promotional Banner" promotion="Active" />
    </div>
  );
};

export default PromotionalPopup;
