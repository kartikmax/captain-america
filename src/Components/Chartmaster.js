// import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { arrange, desc, sliceHead, tidy } from "@tidyjs/tidy";
import Data from "./AllApi.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "chart js",
    },
  },
};

const cdata2 = tidy(Data, arrange([desc("area")]), sliceHead(10));

const names = cdata2.map((x) => x.name.common);
console.log(cdata2, "here", names);


export function App() {
  
const data = {
  names,
  datasets: [
    {
      label: "population",
      data: cdata2.map((x) => x.population),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "area",
      data: cdata2.map((x) => x.area / 10000),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
  return (
    <div style={{ height: "300px", width: "500px" }}>
      <Line options={options} data={data} />
    </div>
  );
}
