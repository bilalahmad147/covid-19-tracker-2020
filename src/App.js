import React, { useEffect } from "react";
import "./App.css";
import { getAllData } from "./Components/ApiData/ApiData";
import Card from "./Components/Cards/Card";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const getFullData = async () => {
    const response = await getAllData();
    console.log(response);
    // const { confirmed, recovered, deaths, lastUpdate } = await response.json();
    // console.log(confirmed);
  };

  useEffect(() => {
    getFullData();
  }, []);

  return (
    <div className="App">
      <h1>Covid-19 Tracker</h1>
      <SearchBar />
      <Card />
    </div>
  );
}

export default App;
