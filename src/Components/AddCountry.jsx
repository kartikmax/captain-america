import React from "react";
import {
  Button,
  Table,
  TableCell,
  TableHead,
  Paper,
  TableBody,
  TableRow,
} from "@mui/material";
import Data from "../Components/AllApi.json";
import { useState } from "react";
import { arrange, tidy, desc, mutate, asc } from "@tidyjs/tidy";

function AddCountry({ setToggle }) {
  // const [btnColor, setBtnColor] = useState("primary");
  const btnColor = "primary";
  const [orderX, setOrderX] = useState("asscending");

  const [value, setValue] = useState("cname");

  const showData = tidy(
    Data,
    mutate({
      cname: (x) => x.name.common,
      latitude: (x) => x.latlng[0].toFixed(2),
      longitude: (x) => x.latlng[1].toFixed(2),
    }),

    orderX === "asscending" ? arrange([asc(value)]) : arrange([desc(value)])
  );
  console.log(showData[0]);

  function handleColorChangeName() {
    setValue("cname");
  }
  function handleColorChangePopulation() {
    setValue("population");
  }
  function handleColorChangeArea() {
    setValue("area");
  }
  function handleColorChangeLongitude() {
    setValue("longitude");
  }
  function handleColorChangeLatitude() {
    setValue("latitude");
  }

  function handleOrder() {
    orderX === "asscending" ? setOrderX("descending") : setOrderX("asscending");
  }

  return (
    <>
      add country
      <Button
        variant="contained"
        onClick={() => {
          setToggle(true);
        }}
      >
        click home hi
      </Button>
      <h3>current sorted Data :-{value}</h3>
      change the order of data
      <Button
        variant="contained"
        onClick={handleOrder}
        color={orderX === "ascending" ? "success" : "secondary"}
      >
        {orderX}
      </Button>
      <Table component={Paper}>
        <Table>
          <TableHead>
            <TableCell>
              <Button
                variant="contained"
                color={btnColor}
                onClick={handleColorChangeName}
              >
                Name
              </Button>
            </TableCell>
            <TableCell>Flag</TableCell>

            <TableCell>
              <Button
                variant="contained"
                color={btnColor}
                onClick={handleColorChangePopulation}
              >
                population
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color={btnColor}
                onClick={handleColorChangeArea}
              >
                area
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color={btnColor}
                onClick={handleColorChangeLatitude}
              >
                latitude
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color={btnColor}
                onClick={handleColorChangeLongitude}
              >
                longitude
              </Button>
            </TableCell>
          </TableHead>

          {showData.map((x, index) => {
            return (
              <TableBody>
                <TableRow>
                  <TableCell key={index}>{x.cname}</TableCell>
                  <TableCell>
                    <img
                      src={x.flags.png}
                      alt={x.flags}
                      height="40"
                      width="60"
                      // style={myStyle.borderFlag}
                    />
                  </TableCell>
                  <TableCell>{x.population}</TableCell>
                  <TableCell>{x.area}</TableCell>
                  <TableCell> {x.latitude} </TableCell>
                  <TableCell> {x.longitude} </TableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
      </Table>
    </>
  );
}

export default AddCountry;
