import React, {useContext} from 'react';
import {Box, FormControl, InputAdornment, OutlinedInput, Paper} from "@mui/material";
import Context from "../context/context";

export function Search() {
  const {dispatchSearch} = useContext(Context);
  return (
    <Paper elevation={3}>
      <Box component="form" noValidate autoComplete="off">
        <FormControl sx={{width: '100%'}}>
          <OutlinedInput placeholder="Search" onChange={(e) =>dispatchSearch(e.target.value)}/>
        </FormControl>
      </Box>
    </Paper>
  );
}
