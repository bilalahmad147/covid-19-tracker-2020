import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <div className="App">
      <h1>Covid-19 Application</h1>
      <Button
        style={{
          fontSize: 14,
          borderRadius: 15
        }}
        onClick={() => {
          alert("hello world");
        }}
        variant="contained"
        color="secondary"
      >
        Hello World
      </Button>
    </div>
  );
}

export default App;
