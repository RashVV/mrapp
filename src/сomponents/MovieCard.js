import React from "react";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import "./movieCard.css";
import Typography from "@mui/material/Typography";
import {config} from "../api/config";
import {PercentCircle} from "./PercentCircle";
import {useNavigate} from "react-router-dom";
const width = "w300";

export function MovieCard({item}) {
  const navigate = useNavigate();
  const formatDate = (date) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let currDate = new Date(date);
    let formattedDate = currDate.getDate() + ' ' + months[currDate.getMonth()] + ' ' + currDate.getFullYear();
    return formattedDate;
  };
  return (
    <Card className="card"
      onClick={() => {
        navigate('/movieDetail/:id', {state: {id: item.id}});
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
            {item.title}
          </Typography>
          <Typography variant="subtitle1">
            {formatDate(item.release_date)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
