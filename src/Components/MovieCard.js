import React from "react";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import "./movieCard.css";
import Typography from "@mui/material/Typography";
import {config} from "../api/config";
import {PercentCircle} from "./PercentCircle";
const width = "w300";

export function MovieCard(props) {
  const { item } = props;
  return (
    <Card className="card">
      <CardActionArea>
        {/*<img src={config.api_img_url + width + item.poster_path} alt={item.title}/>*/}
        <CardMedia className="card-media" image={config.api_img_url + width + item.poster_path}/>
        <CardContent className="card-content" sx={{ textAlign: "left"}}>
          <PercentCircle item={item}/>
          <Typography variant="h6"
            sx={{
              fontWeight: "600"
            }}>
            {item.title}
          </Typography>
          <Typography variant="subtitle1">
            {item.release_date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
