import React from "react";
import {
  Button,
  Table,
  TableCell,
  TableHead,
  Paper,
  TableBody,
  TableRow,
  Typography,
} from "@mui/material";
import Data from "../Components/AllApi.json";
import { useState } from "react";
import { arrange, tidy, desc, mutate } from "@tidyjs/tidy";

function AddCountry({ setToggle }) {
  const [btnColor, setBtnColor] = useState("primary");
  // const [btnColor2, setBtnColor2] = useState("primary");
  // const [btnColor3, setBtnColor3] = useState("primary");
  // const [btnColor4, setBtnColor4] = useState("primary");
  // const [btnColor5, setBtnColor5] = useState("primary");
  const [value, setValue] = useState("cname");

  const showData = tidy(
    Data,
    mutate({
      cname: (x) => x.name.common,
      latitude: (x) => x.latlng[0].toFixed(2),
      longitude: (x) => x.latlng[1].toFixed(2),
    }),
    arrange([value])
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
      <Typography variant="bolder">current sorted Data :-{value}</Typography>
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
