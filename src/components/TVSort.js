import React, {useContext, useState} from "react";
import {Divider, ListItem, ListItemButton, ListItemText, Paper} from "@mui/material";
import Context from "../context/context";
import {TVFilter} from "./TVFilter";
import {Search} from "./Search";
import Grid from "@mui/material/Grid";
import SortIcon from '@mui/icons-material/Sort';


export function TVSort() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const { dispatchAscending, dispatchDescending } = useContext(Context);
  return (
    <>
      <Grid container >
        <Grid item sx={{margin: "0 0 50px 0", width: "100%"}}>
          <Search />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sx={{width:"100%"}} >
          <Paper elevation={3}>
            <ListItem>
              <SortIcon />
              <ListItemText primary="Sort results by:"/>
            </ListItem>
          </Paper>
          <Paper>
            <ListItemButton
              sx={{pl: 4}}
              selected={selectedIndex === 1}
              onClick={(event) => {
                dispatchDescending();
                handleListItemClick(event, 1);
              }}>
              <ListItemText primary="Newest"/>
            </ListItemButton>
            <Divider/>
            <ListItemButton
              sx={{pl: 4}}
              selected={selectedIndex === 2}
              onClick={(event) => {
                dispatchAscending();
                handleListItemClick(event, 2);
              }}>
              <ListItemText primary="Oldest"/>
            </ListItemButton>
          </Paper>
          <TVFilter />
        </Grid>
      </Grid>

    </>
  );
}
