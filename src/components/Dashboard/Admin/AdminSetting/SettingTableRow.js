import React from "react";

const SettingTableRow = ({
  title,
  data,
  directAmount,
  directBonus,
  setDirectAmount,
  setDirectBonus,
  TeamAmount,
  setTeamBonus,
}) => {
  return (
    <div className="row p-0 m-0">
      <div className="col-4 border">
        <div className="p-lg-3">
          <strong>{title}</strong>
        </div>
      </div>
      <div className="col-8 border">
        {data && (
          <div className="p-lg-3">
            <small className="text-secondary">{data}</small>
          </div>
        )}
        {directAmount && (
          <div className="mt-2">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Direct Deposit Amount"
              onChange={(e) => setDirectAmount(e.target.value)}
            ></input>
          </div>
        )}
        {directBonus && (
          <div className="mt-2">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Direct Bonus Amount"
              onChange={(e) => setDirectBonus(e.target.value)}
            ></input>
          </div>
        )}
        {TeamAmount && (
          <div className="mt-2">
            <input
              type="email"
              className="form-control"
              placeholder="Team Incentive Amount"
            />
          </div>
        )}
        {setTeamBonus && (
          <div className="mt-2">
            <input
              type="email"
              className="form-control"
              placeholder="Team Bonus Incentive Amount"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingTableRow;
