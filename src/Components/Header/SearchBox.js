import { React, useState } from 'react';
import TextField from '@mui/material/TextField';
import './Header.css';
import SearchList from './SearchList';

export function SearchBox() {
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
}
