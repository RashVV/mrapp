import React, {useEffect, useState} from "react";
import {Collapse, FormControl, InputLabel, ListItemButton, ListItemText, Paper} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {GenresData} from "./GenresData";

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
          <GenresData />
          {/*<ListItemButton sx={{pl: 4}}  >*/}
          {/*    <ListItemText primary="By genres"/>*/}
          {/*    /!*{open ? <ExpandLess/> : <ExpandMore/>}*!/*/}
          {/*</ListItemButton>*/}
          {/*<Collapse in={open} timeout="auto" unmountOnExit>*/}
          {/*    <Paper elevation={3}>*/}
          {/*        <GenresData/>*/}
          {/*    </Paper>*/}
          {/*</Collapse>*/}
        </Paper>
      </Collapse>
    </Paper>
  );
}
