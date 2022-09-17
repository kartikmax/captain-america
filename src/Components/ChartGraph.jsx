import React from "react";
import { Button } from "@mui/material";

function ChartGraph({ setToggle }) {
  return (
    <div>
      ChartGraph
      <Button
        variant="contained"
        onClick={() => {
          setToggle(true);
        }}
      >
        click home
      </Button>
    </div>
  );
}

export default ChartGraph;
