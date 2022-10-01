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

export default function Chartmaster() {
  const [value, setValue] = useState("population");
  const [top, setTop] = useState(10);
  function handleChange() {
    value === "area" ? setValue("population") : setValue("area");
  }

  function handleChangeTop(e) {
    setTop(e.target.value);
  }

  const cdata2 = tidy(
    Data,
    mutate({ populationDiv: (x) => x.population / 10000 }),
    arrange([desc("area")]),
    sliceHead(top)
  );
  console.log(cdata2, "here");

  return (
    <>
      <div style={{ margin: "20px" }}>
        <span
          style={{
            border: "2px solid red",
            padding: "10px",
            margin: "20px",
            backgroundColor: "aquamarine",
            borderRadius: "5px",
          }}
        >
          <>&nbsp; population</>
          <Switch onClick={handleChange} />
          <>area </>
        </span>
      </div>
      <select onChange={handleChangeTop}>
        <option>10</option>
        <option>20</option>
        <option>30</option>
      </select>
      <LineChart
        width={900}
        height={300}
        data={cdata2}
        style={{
          border: "1px solid black",
          padding: "10px",
          backgroundColor: "#fafad2",
          borderRadius:"30px"
        }}
      >
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
