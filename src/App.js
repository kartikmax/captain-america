import React, { useState } from "react";
import Main from "./Components/Main";
import "./App.css";

export default function App() {
  const [enable, setEnable] = useState(true);
  function callFn() {
    enable ? setEnable(false) : setEnable(true);
  }
  console.log(enable, "check");

  return (
    <>
      <h1>Countries App</h1>
      {enable ? (
        <>
          <div className="container">
            <div className="child child-1" onClick={callFn}>
              <div className="innerText">All Details</div>
            </div>
            <div className="child child-2" onClick={callFn}>
              <div className="innerText">Analytics</div>
            </div>
            <div className="child child-3" onClick={callFn}>
              <div className="innerText">Add Country</div>
            </div>
            <div className="child child-4" onClick={callFn}>
              <div className="innerText">Chart</div>
            </div>
          </div>
        </>
      ) : (
        <Main />
      )}
    </>
  );
}
