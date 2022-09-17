import React from "react";
import { Button } from "@mui/material";

function AddCountry({ setToggle }) {
  return (
    <div>
      add country
      <Button
        variant="contained"
        onClick={() => {
          setToggle(true);
        }}
      >
        click home hi
      </Button>
    </div>
  );
}

export default AddCountry;
