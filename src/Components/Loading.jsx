import React from "react";
import { CircularProgress, TableRow,TableCell } from "@mui/material";
// import TableCell from "@mui/material";

export default function Loading() {
  return (
    <TableRow>
      <TableCell>
        <CircularProgress />
      </TableCell>
      <TableCell>
        <CircularProgress />
      </TableCell>
      <TableCell>
        <CircularProgress />
      </TableCell>
      <TableCell>
        <CircularProgress />
      </TableCell>
    </TableRow>
  );
}
