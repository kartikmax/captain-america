import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { App } from "./Chartmaster";

function Analytics({ setToggle }) {
  
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
