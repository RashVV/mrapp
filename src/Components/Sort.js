import React, {useContext} from "react";
import {Divider, ListItem, ListItemButton, ListItemText, Paper} from "@mui/material";
import Context from "../context/context";
import {Filter} from "./Filter";
import {Search} from "./Search";
import Grid from "@mui/material/Grid";
import SortIcon from '@mui/icons-material/Sort';


export function Sort() {
  const { dispatchAscending, dispatchDescending } = useContext(Context);
  return (
    <Paper elevation={4}>
      <Grid item >
        <Paper elevation={3}>
          <ListItem>
            <SortIcon />
            <ListItemText primary="Sort results by:"/>
          </ListItem>
        </Paper>
        <Paper>
          <ListItemButton sx={{pl: 4}} onClick={() => dispatchDescending()} >
            <ListItemText primary="Newest"/>
          </ListItemButton>
          <Divider/>
          <ListItemButton sx={{pl: 4}} onClick={() => dispatchAscending()}>
            <ListItemText primary="Oldest"/>
          </ListItemButton>
        </Paper>
        <Filter />
        <Paper>
          <Search />
        </Paper>
      </Grid>
    </Paper>
  );
}
