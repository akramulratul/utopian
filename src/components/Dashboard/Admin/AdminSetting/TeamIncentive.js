import React from "react";
import SettingTableRow from "./SettingTableRow";
import { useState } from "react";

const TeamIncentive = () => {
  const [TeamAmount, setTeamAmount] = useState();
  const [TeamBonus, setTeamBonus] = useState();
  return (
    <div className="bg-white justify-content-between rounded mt-3 ml-3 mr-3">
      <div>
        <h1>Team Incentive Setting</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, est!
        </p>
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
    </div>
  );
};

export default TeamIncentive;
