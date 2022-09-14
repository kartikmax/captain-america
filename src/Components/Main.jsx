import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  // import { Box } from "@mui/system";
  import React, { useEffect, useState } from "react";
  import Loading from "./Loading";
  
  const myStyle = {
    root: {
      backgroundColor: "lightBlue",
    },
    borderFlag: {
      border: "1px solid black",
    },
  };
  
  const Main = () => {
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
  
    // console.log(countryData);
    return (
      <div style={myStyle.root}>
        hello world this is version control
        <h1>this is the table</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableCell>Country Name</TableCell>
              <TableCell>Capital</TableCell>
              <TableCell>Regions</TableCell>
              <TableCell>Images</TableCell>
              {/* <TableCell>Imgs 2</TableCell> */}
            </TableHead>
            {countryData ? (
              countryData.map((x, index) => {
                return (
                  <>
                    <TableBody>
                      <TableRow>
                        <TableCell key={index}>{x.name.common}</TableCell>
                        <TableCell>
                          <ul>
                            {x.capital &&
                              x.capital.map((y) => {
                                return <li>{y}</li>;
                              })}
                          </ul>
                        </TableCell>
                        <TableCell>{x.region}</TableCell>
                        <TableCell>
                          <img
                            src={x.flags.png}
                            alt={x.flags}
                            height="40"
                            width="60"
                            style={myStyle.borderFlag}
                          />
                        </TableCell>
                        {/* <TableCell>
                          <img src={x.coatOfArms.png} alt={x.flag} height="40" width="60" />
                        </TableCell> */}
                      </TableRow>
                    </TableBody>
                  </>
                );
              })
            ) : (
              <TableBody>
                <Loading />
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  export default Main;
  