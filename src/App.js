import React, { useState, useEffect } from "react";
import "./App.css";
import { getAllData } from "./Components/ApiData/ApiData";
import Card from "./Components/Cards/Card";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [state, setState] = useState({
    data: {},
    country: "",
  });

  const getFullData = async () => {
    const data = await getAllData();
    setState({ data });
  };

  useEffect(() => {
    getFullData();
  }, []);

  const handleCountryChange = async (country) => {
    const data = await getAllData(country);
    setState({ data, country: country });
  };

  return (
    <div className="App">
      <h1>Covid-19 Tracker</h1>
      <SearchBar handleCountryChange={handleCountryChange} />
      <Card data={state.data} />
    </div>
  );
}

export default App;
