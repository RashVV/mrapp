import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import {config} from "../../api/config";
import Typography from "@mui/material/Typography";
const width = "w500";

export function TrendingCard ({item, handleClick}) {
  const movieReleaseYear = (date) => new Date(date).getFullYear();
  return (
    <Card key={item.id}
      onClick={handleClick}>
      <CardActionArea sx={{height: "400px", width: '200px', margin: '20px' }}>
        <CardMedia image={config.api_img_url + width + item.poster_path} sx={{width: '100%', height: "80%"}} />
        <CardContent>
          <Typography
            sx={{
              fontWeight: "300"
            }}>
            {item.title || item.name} ({movieReleaseYear(item.release_date || item.first_air_date)})
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}