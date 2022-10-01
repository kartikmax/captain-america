import React, { useReducer, useState } from "react";
import Main from "./Components/Main";
import Analytics from "./Components/Analytics";
import AddCountry from "./Components/AddCountry";
import ChartGraph from "./Components/ChartGraph";
import { reducerF } from "./Reducer";
import "./App.css";

const initalState = 0;

export default function App() {
  const [state, dispatch] = useReducer(reducerF, initalState);
  const [toggle, setToggle] = useState(true);

  function handleOne() {
    dispatch({ type: "one" });
    toggle ? setToggle(false) : setToggle(true);
  }

  function handleTwo() {
    dispatch({ type: "two" });
    toggle ? setToggle(false) : setToggle(true);
  }

  function handleThree() {
    dispatch({ type: "three" });
    toggle ? setToggle(false) : setToggle(true);
  }

  function handleFour() {
    dispatch({ type: "four" });
    toggle ? setToggle(false) : setToggle(true);
  }
  console.log(state, toggle, "here is value");
  return (
    <>
      <h1>Country App</h1>
      {(state === 0 || toggle) && (
        <div className="container">
          <div className="child child-1" onClick={handleOne}>
            <div className="innerText">All Details</div>
          </div>
          <div className="child child-2" onClick={handleTwo}>
            <div className="innerText">Analytics</div>
          </div>
          <div className="child child-3" onClick={handleThree}>
            <div className="innerText">sorting tables</div>
          </div>
          <div className="child child-4" onClick={handleFour}>
            <div className="innerText">Chart</div>
          </div>
        </div>
      )}
      {state === 1 && !toggle && <Main setToggle={setToggle} />}
      {state === 2 && !toggle && <Analytics setToggle={setToggle} />}
      {state === 3 && !toggle && <AddCountry setToggle={setToggle} />}
      {state === 4 && !toggle && <ChartGraph setToggle={setToggle} />}
    </>
  );
}
