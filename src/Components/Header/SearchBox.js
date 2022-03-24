import { React, useState } from 'react';
import TextField from '@mui/material/TextField';
import './Header.css';
import SearchList from './SearchList';

export function SearchBox() {
<<<<<<< HEAD
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
    return (
      <div>
        <div className="search__box">
          <TextField
            className="search"
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <SearchList  input={inputText} />
      </div>
    );
=======
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' style={{ color: '#e8ebed', border: '1px solid #e8ebed', backgroundColor: '#1d1e1e' }} >
        <Toolbar>
          <Search>
            <StyledInputBase
              placeholder='Search...'
              inputProps={{ 'aria-label': 'Search' }}/>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
>>>>>>> master
}
