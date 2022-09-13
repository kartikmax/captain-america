import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const myStyle = {
  backgroundColor: "lightBlue",
};



const App = () => {
  

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

  console.log(countryData);
  return (
    <div style={myStyle}>
      hello world this is version control
      <h1>this is the table</h1>
      <TableContainer component={Paper} >
        <Table>
          <TableHead>
            <TableCell>Country Name</TableCell>
            <TableCell>Capital</TableCell>
          </TableHead>
          {countryData &&
            countryData.map((x) => {
              return (
                <>
                  {/* {x.name.common}
              <p>{x.flag}</p>
            <img src={x.flags.png} height="35px" width="80px" alt={x.flag} /> */}
                  <TableBody>
                    <TableRow>
                      <TableCell>{x.name.common}</TableCell>
                      <TableCell>
                        <ul>
                          {x.capital &&
                            x.capital.map((y) => {
                              return <li>{y}</li>;
                            })}
                        </ul>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </>
              );
            })}
        </Table>
      </TableContainer>
    </div>
  );
};

export default App;
