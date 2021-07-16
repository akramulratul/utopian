import React from "react";
import { useState } from "react";
import { ButtonGroup, ToggleButton, Form } from "react-bootstrap";

const SettingTableRow = ({
  title,
  data,
  directAmount,
  directBonus,
  setDirectAmount,
  setDirectBonus,
  TeamAmount,
  setTeamBonus,
  setTeamAmount,
  toggle,
  promotion,
}) => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Active", value: "1" },
    { name: "Deactivate", value: "2" },
  ];
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
            />
          </div>
        )}
        {TeamAmount && (
          <div className="mt-2">
            <input
              type="email"
              className="form-control"
              placeholder="Team Incentive Amount"
              onChange={(e) => setTeamAmount(e.target.value)}
            />
          </div>
        )}
        {setTeamBonus && (
          <div className="mt-2">
            <input
              type="email"
              className="form-control"
              placeholder="Team Bonus Incentive Amount"
              onChange={(e) => setTeamBonus(e.target.value)}
            />
          </div>
        )}
        {toggle && (
          <div className="mt-2">
            <ButtonGroup>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={idx % 2 ? "outline-danger" : "outline-success"}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </div>
        )}
        {promotion && (
          <div className="mt-2">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Input your offer picture</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingTableRow;
