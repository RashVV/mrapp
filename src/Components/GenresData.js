import React, {useContext, useEffect, useState} from "react";
import useAxios from "../hooks/axios.hook";
import {useTheme} from "@emotion/react";
import {Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select} from "@mui/material";
import Context from "../context/context";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
            personName.indexOf(name) === -1
              ? theme.typography.fontWeightRegular
              : theme.typography.fontWeightMedium,
  };
}
export function GenresData() {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const {response} = useAxios({url: "/genre/movie/list", method: "get"});
  const {dispatchFilterByGenres} = useContext(Context);

  useEffect(() => {
    if (response !== null) {
      setGenres(response.genres);
    }}, [response]);

  useEffect(() => {
    if(selectedGenres.length){
      dispatchFilterByGenres(selectedGenres);
    }
  }, [selectedGenres]);


  const theme = useTheme();
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedGenres(
      typeof value === 'string' ? value.split(',') : value
    );
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">By genres</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedGenres}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="By genres" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value.id} label={value.name} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {genres.map((genre) =>(
            <MenuItem
              key={genre.id}
              value={genre}
            >
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
