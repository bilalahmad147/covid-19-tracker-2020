import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { getCountries } from "../ApiData/ApiData";

const SearchBar = () => {
  const [initialCountries, setCountries] = useState([]);

  const fetchApi = async () => {
    const response = await getCountries();
    let {countries} = await response.json();
    const countryNamesList = countries.map(country => country.name)
    setCountries(countryNamesList)
  };

  useEffect(() => {
    fetchApi();
  }, []);

//   console.log({initialCountries});

  return (
    <div>
      <FormControl className="formControl">
        <NativeSelect defaultValue="">
          <option value="">Global</option>
          {initialCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default SearchBar;
