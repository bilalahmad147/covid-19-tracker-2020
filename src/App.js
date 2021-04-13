import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const getData = async () => {
    const resource = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await resource.json();
    console.log(data);
  };

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <h1>React Application</h1>
    </div>
  );
}

export default App;
