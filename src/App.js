import React, { useState, useEffect } from "react";
import { CircleLoader, ClockLoader, PacmanLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";
import Header from "./Header/Header";
import MediaCard from "./Content/Content";
import "./App.css";
import data from "./data";
import About from "./About/About";
import { Card } from "@mui/material";
import Checkboxes from "./Skills/Skills";

function App() {
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

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <ClockLoader
          className="loading-clock"
          color={"#F37A24"}
          loading={loading}
          size={100}
        />
      ) : (
        <div>
          <Header />
          <About />
          {Cards}
          <Checkboxes />
        </div>
      )}
    </div>
  );
}

export default App;
