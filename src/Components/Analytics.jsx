import { Button } from "@mui/material";
import React from "react";
import Chartmaster from "./Chartmaster";

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
      <Chartmaster />
    </>
  );
}

export default Analytics;
