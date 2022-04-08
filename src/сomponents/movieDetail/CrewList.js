import React from 'react';
import {List, ListItem} from "@mui/material";
import './movieMainInfo.css';

export function CrewList({movieCreditsResponse}) {
  let movieCrew = movieCreditsResponse.crew;
  function getDirector (crew) {
    return crew.find(item => (item.job === 'Director'));
  }
  function getWriter (crew) {
    return crew.find(item => (item.job === 'Writer' || item.job === 'Screenplay'));
  }
  return (
    <>
      <List className='list-horizontal-display'>
        <ListItem sx={{ fontSize: 'larger', fontWeight: '700', margin: '20px 0 0 0', padding: '0'}}>
          {getDirector(movieCrew).name}
        </ListItem>
        <ListItem sx={{ fontSize: 'larger', fontWeight: '700', margin: '20px 0 0 0', padding: '0'}}>
          {getWriter(movieCrew).name}
        </ListItem>
      </List>
      <List className='list-horizontal-display'>
        <ListItem sx={{ fontSize: 'medium', margin: '0', padding: "0 0"}}>
          {getDirector(movieCrew).job}
        </ListItem>
        <ListItem sx={{ fontSize: 'medium', margin: '0', padding: "0"}}>
          {getWriter(movieCrew).job}
        </ListItem>
      </List>
    </>
  );
}
