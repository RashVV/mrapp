import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'black',
  '&:hover': {
    backgroundColor: 'black',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1.5, 1.5, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '8ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export function SearchBox() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' style={{ color: '#e8ebed', border: '1px solid #e8ebed', backgroundColor: '#1d1e1e' }} >
        <Toolbar>
          <Search>
              <StyledInputBase
                placeholder='Search...'
                inputProps={{ 'aria-label': 'Search' }}
              />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}