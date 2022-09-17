import { Button } from "@mui/material";
import { count } from "@tidyjs/tidy";
// import { count } from "@tidyjs/tidy";
import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";



// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' ,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };

function Analytics({ setToggle }) {
  const [countryData, setCountryData] = useState();
  const [numCountryData, setNumCountryData] = useState();
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
      {/* <Line />; */}
    </>
  );
}

export default Analytics;
