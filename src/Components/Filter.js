import React, {useState} from "react";
import {Collapse, ListItemButton, ListItemText, Paper} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {GenresList} from "./GenresList";

export function Filter() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Paper elevation={3}>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Filter"/>
        {open ? <ExpandLess/> : <ExpandMore/>}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Paper>
          <GenresList />
        </Paper>
      </Collapse>
    </Paper>
  );
}
