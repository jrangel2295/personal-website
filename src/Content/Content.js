import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Content.css";

const MediaCard = props => {
  return (
    
    <div className="content-container" id="Past-work">
      <ul className="list">
        <Card className="card" sx={{ width: 300, height: 200}}>
          <CardActionArea>
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
    </div>
  );
};

export default MediaCard;
