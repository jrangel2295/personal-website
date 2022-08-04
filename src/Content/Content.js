import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Content.css";

const MediaCard = props => {
  return (
    <ul className="list">
      <Card sx={{ maxWidth: 305, height: 200 }}>
        <CardActionArea>
          <CardMedia className="card" />
          <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ul>
  );
};

export default  MediaCard