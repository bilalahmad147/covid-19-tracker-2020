import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const getData = async () => {
    const resource = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await resource.json();
    setgetInfo(data);
    console.log(data);
  };

  useEffect(() => {
    getData()
  }, [])

  const [getInfo, setgetInfo] = useState([]);
  console.log(getData());

  return (
    <div className="App">
      {/* <h1>hellp React Application</h1> */}
      {getInfo.map((val, ind) => {
        return <h1 key={ind}>{val.title}</h1>;
      })}
    </div>
  );
}

export default App;
