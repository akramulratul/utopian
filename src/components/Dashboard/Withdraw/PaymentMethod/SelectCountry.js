import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'


function SelectCountry({changeHandler}) {
  const options = useMemo(() => countryList().getData(), [])


  return <Select options={options}  onChange={changeHandler} />

}

export default SelectCountry