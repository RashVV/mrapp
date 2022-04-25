import React from 'react';
import {Box, FormControl, InputAdornment, OutlinedInput} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch} from "react-redux";
import {fetchSearchAction} from "../redux/actions";

export function Search() {
  const dispatch = useDispatch();
  return (
    <Box component="form" noValidate autoComplete="off"  >
      <FormControl sx={{width: '100%'}}>
        <OutlinedInput placeholder="Search"
          startAdornment = {
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          onChange={(e) => dispatch(fetchSearchAction(e.target.value))}/>
      </FormControl>
    </Box>
  );
}
