import React from "react";
import "./App.css";
import Card from './Components/Cards/Card'
import SimpleSelect from "./Components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <h1>Covid-19 Tracker Application</h1>
      <Card />
      <SimpleSelect />
    </div>
  );
}

export default App;
