import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import CountrySelect from 'react-bootstrap-country-select';


function SelectCountry({changeHandler,value}) {
  const options = useMemo(() => CountrySelect().getData(), [])


  return (
    <CountrySelect
      value={value}
      onChange={changeHandler}
    />
  );
}

export default SelectCountry