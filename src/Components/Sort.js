import React, {useContext, useState} from "react";
import {Box, Collapse, ListItemButton, ListItemText, Paper} from "@mui/material";
import "./sort.css";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import Context from "../context/context";
import {Filter} from "./Filter";
import {Search} from "./Search";


export function Sort() {
  const [open, setOpen] = useState(false);
  const { dispatchAscending, dispatchDescending } = useContext(Context);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Paper className="sort-box" elevation={3}>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Sort results by"/>
        {open ? <ExpandLess/> : <ExpandMore/>}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Paper>
          <ListItemButton sx={{pl: 4}} onClick={() => dispatchDescending()} >
            <ListItemText primary="Newest"/>
          </ListItemButton>
          <ListItemButton sx={{pl: 4}} onClick={() => dispatchAscending()}>
            <ListItemText primary="Oldest"/>
          </ListItemButton>
        </Paper>
      </Collapse>
      <Filter />
      <Paper>
        <Search />
      </Paper>
    </Paper>
  );
}
