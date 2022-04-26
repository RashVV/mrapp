import React from "react";
import {ListItem, ListItemText, Paper} from "@mui/material";
import {GenresList} from "./GenresList";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export function TVFilter() {

  return (
    <Paper elevation={3}>
      <ListItem>
        <FilterAltIcon />
        <ListItemText primary="Filter"/>
      </ListItem>
      <Paper>
        <GenresList />
      </Paper>
    </Paper>
  );
}
