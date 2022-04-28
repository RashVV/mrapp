import React from 'react';
import {Card, CardContent, CardMedia} from "@mui/material";
import {config} from "../../../api/config";
import Typography from "@mui/material/Typography";

const width = "w500";

export function FavoriteCard ({item}) {
  return (
    <Card sx={{height: "400px", width: '200px', margin: '20px' }}>
      <CardMedia image={config.api_img_url + width + item.profile_path} sx={{width: '100%', height: "70%"}} />
      <CardContent sx={{ textAlign: "left"}}>
        <Typography variant="h6"
          sx={{
            fontWeight: "600"
          }}>
          {item.original_name}
        </Typography>
        <Typography variant="subtitle1" fontWeight='500'>
          {item.character}
        </Typography>
      </CardContent>
    </Card>
  );
}
