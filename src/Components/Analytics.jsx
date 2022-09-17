import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { App } from "./Chartmaster";

function Analytics({ setToggle }) {
  const [countryData, setCountryData] = useState();
  function getData() {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((json) => {
        setCountryData(json);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  console.log(countryData, "here");
  return (
    <>
      Analytics
      <Button
        variant="contained"
        onClick={() => {
          setToggle(true);
        }}
      >
        click home
      </Button>
      <br />
      top ten countries by area
      <div style={{ height: "300px", width: "500px" }}>
        <App />
      </div>
    </>
  );
}

export default Analytics;
