import React, {useEffect, useState} from 'react';
import {useMoviesCredits} from "../../hooks/moviesCredits.hook";
import {List, ListItem} from "@mui/material";

export function MovieCrew ({filmId}) {
  const {movieCreditsResponse} = useMoviesCredits({filmId});
  const movieCrew = movieCreditsResponse && movieCreditsResponse.crew;
  const directorName = movieCrew && getDirectorName(movieCrew);
  const writerName = movieCrew && getWriterName(movieCrew);

  function getDirectorName (crew) {
    const director =  crew.find(item => (item.job === 'Director'));
    return director ? director.name : '';
  }

  function getWriterName (crew) {
    const writer = crew.find(item => (item.job === 'Writer' || item.job === 'Screenplay'));
    return writer ? writer.name : '' ;
  }

  return (
    <List>
      {directorName && <ListItem sx={{fontSize: 'medium', color: '#c8c5c5', paddingLeft: 0}}>Director: { directorName}</ListItem>}
      {writerName && <ListItem
        sx={{fontSize: 'medium', color: '#c8c5c5', paddingLeft: 0}}
      >Writer: { writerName }
      </ListItem>}
    </List>
  );
}
