import React from "react";
import { Button } from "@mui/material";
// import myVideo from "../Components/space.mp4";

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
      {/* <video style={{ height: "200px", width: "400px" }} controls>
        <source src={myVideo} />
      </video> */}
    </div>
  );
}

export default AddCountry;
