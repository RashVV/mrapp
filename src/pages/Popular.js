import React from "react";
import {PopularTVList} from "../components/PopularTVList";
import {Sort} from "../components/Sort";
import {PopularTVProvider} from "../context/PopularTVProvider";
import {Paper} from "@mui/material";
import Grid from "@mui/material/Grid";
import '../App.css';

export function Popular () {
  return (
    <PopularTVProvider>
      <Paper >
        <Grid container >
          <Grid xs={12} item>
            <p className="text">Popular TV Shows</p>
          </Grid>
          <Grid container item xs={12} >
            <Grid item xs={12} md={3} sx={{margin: "0 0 20px 0"}}>
              <Sort/>
            </Grid>
            <Grid container item xs={12} md={9}>
              <PopularTVList/>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </PopularTVProvider>
  );
}
