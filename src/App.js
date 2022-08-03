import React, { useState, useEffect } from "react";
import { CircleLoader, ClockLoader, PacmanLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";
import Header from "./Header/Header";
import MediaCard from './Content/Content'
import "./App.css";
import data from "./data";
import About from "./About/About";
import { Card } from "@mui/material";

function App() {
  const [loading, setloading] = useState(false);

  const Cards = data.map(data => {
    return (
      <MediaCard
        key={data.id}
        img={data.img}
        title={data.title}
        content={data.content}
      />
    );
  });

  return (
    <div className="App">
      {loading ? (
        <ClockLoader
          className="loading-clock"
          color={"#F37A24"}
          loading={loading}
          size={1000}
        />
      ) : (
        <div>
          <Header />
          <About />
          {Cards}
        </div>
      )}
    </div>
  );
}

export default App;
