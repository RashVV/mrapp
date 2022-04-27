import React from "react";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import "./movieCard.css";
import Typography from "@mui/material/Typography";
import formatDate from "../utils/filter";
import {config} from "../api/config";
import {PercentCircle} from "./PercentCircle";
import {useNavigate} from "react-router-dom";
const width = "w300";

export function TVCard({item}) {
  const navigate = useNavigate();
  
  return (
    <Card className="card"
      onClick={() => {
        navigate(`/tv/${item.id}`);
      } }
    >
      <CardActionArea>
        <CardMedia className="card-media" image={config.api_img_url + width + item.poster_path}/>
        <CardContent className="card-content" sx={{ textAlign: "left"}}>
          <PercentCircle item={item}/>
          <Typography variant="h6"
            sx={{
              fontWeight: "600"
            }}>
            {item.name}
          </Typography>
          <Typography variant="subtitle1">
            {formatDate(item.first_air_date)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}