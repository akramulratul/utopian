import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const CountrySelector = ({ changeHandler }) => {
  const options = useMemo(() => countryList().getData(), []);

  // const changeHandler = (value) => {
  //   setValue(value);
  // };
  return <Select options={options} onChange={changeHandler} />;
};

export default CountrySelector;
