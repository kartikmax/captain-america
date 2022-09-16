import React, { useReducer } from "react";
import Main from "./Components/Main";
import Analytics from "./Components/Analytics";
import AddCountry from "./Components/AddCountry";
import ChartGraph from "./Components/ChartGraph";
import "./App.css";

const initalState = 0;
const reducer = (state, action) => {
  // console.log(state, action);
  if (action.type === "one") {
    return (state = 1);
  }
  if (action.type === "two") {
    return (state = 2);
  }
  if (action.type === "three") {
    return (state = 3);
  }
  if (action.type === "four") {
    return (state = 4);
  }
  return state;
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  console.log(state);
  return (
    <>
      <h1>Countries App</h1>
      {state === 0 && (
        <div className="container">
          <div
            className="child child-1"
            onClick={() => dispatch({ type: "one" })}
          >
            <div className="innerText">All Details</div>
          </div>
          <div
            className="child child-2"
            onClick={() => dispatch({ type: "two" })}
          >
            <div className="innerText">Analytics</div>
          </div>
          <div
            className="child child-3"
            onClick={() => dispatch({ type: "three" })}
          >
            <div className="innerText">Add Country</div>
          </div>
          <div
            className="child child-4"
            onClick={() => dispatch({ type: "four" })}
          >
            <div className="innerText">Chart</div>
          </div>
        </div>
      )}
      {state === 1 && <Main
      //  backState={} backStateFn={}
      />}
      {state === 2 && <Analytics
      //  backState={} backStateFn={}
      />}
      {state === 3 && <AddCountry
      //  backState={} backStateFn={}
      />}
      {state === 4 && <ChartGraph
      //  backState={} backStateFn={}
      />}
    </>
  );
}
