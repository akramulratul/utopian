import React, { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const InSelectCountry = ({ changeHandler }) => {
  const options = useMemo(() => countryList().getData(), []);

  return <Select options={options} onChange={changeHandler} />;
};

export default InSelectCountry;
