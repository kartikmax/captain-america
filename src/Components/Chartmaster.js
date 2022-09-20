import { Switch } from "@mui/material";
import { arrange, sliceHead, tidy, desc, mutate } from "@tidyjs/tidy";
import React from "react";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Data from "./AllApi.json";

const cdata2 = tidy(
  Data,
  mutate({ populationDiv: (x) => x.population / 10000 }),
  arrange([desc("area")]),
  sliceHead(10)
);
console.log(cdata2, "here");

export default function Chartmaster() {
  const [value, setValue] = useState("population");
  function handleChange() {
    value === "population" ? setValue("area") : setValue("population");
    // console.log("click", value);
  }
  return (
    <>
      <span style={{ border: "2px solid red", padding: "10px" }}>
        <>&nbsp; area</>
        <Switch onClick={handleChange} />
        <>population </>
      </span>
      <LineChart width={500} height={300} data={cdata2}>
        <XAxis dataKey="flag" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        {value === "population" && (
          <Line type="monotone" dataKey="populationDiv" stroke="#8884d8" />
        )}
        {value === "area" && (
          <Line type="monotone" dataKey="area" stroke="#82ca9d" />
        )}
      </LineChart>
    </>
  );
}
