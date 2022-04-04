import React, {useState} from 'react';
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  Typography
} from "@mui/material";
import {config} from "../../api/config";
import Box from "@mui/material/Box";
import './movieMainInfo.css';
import {PercentCircle} from "../PercentCircle";
import ListIcon from '@mui/icons-material/List';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Grid from "@mui/material/Grid";

const width = "w500";

export function MoviesMainInfo ({movieDetailResponse, movieCreditsResponse}) {
  const [favouriteActive, setFavouriteActive] = useState(false);
  const [bookmarkActive, setBookmarkActive] = useState(false);
  const [starredActive, setStarredActive] = useState(false);

  function getGenresNames(genres) {
    let str = genres.map(item => item.name);
    return str.join(', ');
  }
  function minutesIntoHours(minutes){
    let hours = Math.floor(minutes / 60);
    let min = minutes % 60;
    let hourDisplay = hours >0 ? hours + (hours === 1 ? "h " : " hours ") : "";
    let minDisplay = min > 0 ? min + (min === 1 ? "min " : " minutes ") : "";
    return hourDisplay + minDisplay;
  }

  function getDirector (crew) {
    return crew.find(item => (item.job === 'Director'));
  }
  function getWriter (crew) {
    return crew.find(item => (item.job === 'Writer'));
  }

  const imageUrl = `${config.api_img_url + width}`;
  const styles = {
    gridContainer: {
      backgroundImage:
          `linear-gradient(rgb(255 255 255 / 87%), rgb(255 255 255 / 87%)),
           url(${imageUrl + movieDetailResponse.backdrop_path})`,
      width: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
    },
  };
  let genresObj = movieDetailResponse.genres;
  let productionCountries = movieDetailResponse.production_countries;
  let movieCrew = movieCreditsResponse.crew;

  return (
    <Grid container item xs={12} style={styles.gridContainer} sx={{py: 2, px: 2}}>
      <Grid item xs={12} md={4} >
        <img src={`${imageUrl + movieDetailResponse.poster_path}`}
          width='100%'/>
      </Grid>
      <Grid item xs={12} md={8} sx={{px: 2, marginTop: '20px'}}>
        <Typography variant='h3' fontWeight='700'>{movieDetailResponse.title}</Typography>
        <List className='list-horizontal-display'>
          <span className='dot-divider'> • </span>
          <ListItem className='list-item-text'>
            {movieDetailResponse.release_date} ({productionCountries.map(item => item.iso_3166_1)})
          </ListItem>
          <span className='dot-divider'> • </span>
          <ListItem className='list-item-text'>
            {getGenresNames(genresObj)}
          </ListItem>
          <span className='dot-divider'> • </span>
          <ListItem className='list-item-text'>
            {minutesIntoHours(movieDetailResponse.runtime)}
          </ListItem>
        </List>
        <Box display='flex' flexDirection='row' alignItems='center' margin='20px 0'>
          <PercentCircle item={movieDetailResponse}/>
          <Avatar  sx={{backgroundColor: '#1d4e69',
            width: '60px',
            height: '60px',
            margin: '10px'}}>
            <IconButton>
              <ListIcon />
            </IconButton>
          </Avatar>
          <Avatar  sx={{backgroundColor: '#1d4e69',
            width: '60px',
            height: '60px',
            margin: '10px'}}>
            <IconButton onClick={()=>{setFavouriteActive(!favouriteActive)}}
              color={favouriteActive ? 'error' : 'default'}>
              <FavoriteIcon />
            </IconButton>
          </Avatar>
          <Avatar  sx={{backgroundColor: '#1d4e69',
            width: '60px',
            height: '60px',
            margin: '10px'}}>
            <IconButton onClick={()=>{setBookmarkActive(!bookmarkActive)}}
              color={bookmarkActive ? 'primary' : 'default'}>
              <BookmarkIcon />
            </IconButton>
          </Avatar>
          <Avatar  sx={{backgroundColor: '#1d4e69',
            width: '60px',
            height: '60px',
            margin: '10px'}}>
            <IconButton onClick={()=>{setStarredActive(!starredActive)}}
              color={starredActive ? 'primary' : 'default'}>
              <StarBorderIcon />
            </IconButton>
          </Avatar>
        </Box>
        <Typography variant='h5' fontWeight='700' marginBottom='20px'>Overview</Typography>
        <Typography variant='h6' fontWeight='400' >{movieDetailResponse.overview}</Typography>
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
      </Grid>
    </Grid>
  );
}
