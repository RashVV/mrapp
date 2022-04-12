import React from 'react';
import {Paper} from "@mui/material";
import Typography from "@mui/material/Typography";

export function MovieAdditionalInfo({movieDetailResponse}) {
  let getInformation = (item => {
    return !item ? '-' : item;
  });
  return(
    <Paper elevation={1} sx={{width: '100%'}}>
      <Typography variant="h6" fontWeight='600' margin='20px 10px 0 10px'>Status</Typography>
      <Typography marginLeft='10px'>{getInformation(movieDetailResponse.status)} </Typography>
      <Typography variant="h6" fontWeight='600' margin='20px 10px 0 10px'>Original language</Typography>
      <Typography marginLeft='10px'>{getInformation(movieDetailResponse.original_language)} </Typography>
      <Typography variant="h6" fontWeight='600' margin='20px 10px 0 10px'>Budget</Typography>
      <Typography marginLeft='10px'>{getInformation(movieDetailResponse.budget)} </Typography>
      <Typography variant="h6" fontWeight='600' margin='20px 10px 0 10px'>Revenue</Typography>
      <Typography marginLeft='10px'>{getInformation(movieDetailResponse.revenue)} </Typography>
    </Paper>
  );
}
