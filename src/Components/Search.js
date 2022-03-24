import React, {useContext} from 'react';
import {Box, FormControl, InputAdornment, OutlinedInput} from "@mui/material";
import Context from "../context/context";
import SearchIcon from '@mui/icons-material/Search';

export function Search() {
  const {dispatchSearch} = useContext(Context);
  return (
    <Box component="form" noValidate autoComplete="off"  >
      <FormControl sx={{width: '100%'}}>
        <OutlinedInput placeholder="Search"
          startAdornment = {
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          onChange={(e) =>dispatchSearch(e.target.value)}/>
      </FormControl>
    </Box>
  );
}
