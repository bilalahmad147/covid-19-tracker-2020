import React from "react";
import "./App.css";
import Button from '@material-ui/core/Button';
import ButtonAppBar from "./Components/NavBar/NavBar";
import SimplePaper from "./Components/Login/Login";


function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <SimplePaper />
      <h1>Covid-19 Application</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default App;
