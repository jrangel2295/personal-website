import "./Skills.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#87CEFA",
  padding: theme.spacing(2),
  textAlign: "center",
}));

export default function Skills() {
  return (
    <div className="skills-container" id='Skills'>
      <h2>Skills</h2>
      <Box style={{ width: "50%", margin: 'auto' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>Java script</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>CSS</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>React</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>HTML</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>Spanish</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>Redux</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
