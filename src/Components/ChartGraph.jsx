import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import Data from "../Components/AllApi.json";

function ChartGraph({ setToggle }) {
  const [countryName, setCountryName] = useState("India");
  function handleSubmit(e) {
    console.log("clicked");
    e.preventDefault();
  }

  function inputValue(event) {
    setCountryName(event.target.value);
  }

  // console.log(countryName)

  const details = Data.find((x) => x.name.common === countryName);
  console.log(details);
  return (
    <>
      ChartGraph
      <Button
        variant="contained"
        onClick={() => {
          setToggle(true);
        }}
      >
        click home
      </Button>
      <div>
        <span>
          search :
          <input
            type="text"
            placeholder="enter the countryname"
            // value={countryName}
          />
          <button type="submit" onClick={handleSubmit} onChange={inputValue}>
            submit
          </button>
        </span>
        <div>
          <img
            src={details.flags.png}
            alt={details.flag}
            height="100"
            width="150"
          />
          <h1>{details.name.common}</h1>
        </div>
        official name:{details.name.official}
        <br />
        capital:{details.capital}
        <br />
        population:{details.population}
        <br />
        area:{details.area}
        <br />
        region:{details.region}
        <br />
      </div>
    </>
  );
}

export default ChartGraph;
