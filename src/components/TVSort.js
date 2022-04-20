import React, {useState} from "react";
import {Divider, ListItem, ListItemButton, ListItemText, Paper} from "@mui/material";
import {Filter} from "./Filter";
import {Search} from "./Search";
import Grid from "@mui/material/Grid";
import SortIcon from '@mui/icons-material/Sort';
import {useDispatch} from "react-redux";
import {ascending, descending} from "../redux/actions";


export function TVSort() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const dispatch = useDispatch();
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
                dispatch(descending());
                handleListItemClick(event, 1);
              }}>
              <ListItemText primary="Newest"/>
            </ListItemButton>
            <Divider/>
            <ListItemButton
              sx={{pl: 4}}
              selected={selectedIndex === 2}
              onClick={(event) => {
                dispatch(ascending());
                handleListItemClick(event, 2);
              }}>
              <ListItemText primary="Oldest"/>
            </ListItemButton>
          </Paper>
          <Filter />
        </Grid>
      </Grid>
    </>
  );
}
