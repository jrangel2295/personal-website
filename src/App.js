// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import { CircleLoader, ClockLoader, PacmanLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";
import Header from "./Header/Header";
import "./App.css";

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? 
        <ClockLoader className="loading-clock"
          color={'#F37A24'}
          loading={loading}
          size={100}
          
        />
       : 
       <Header />
        
      }
    </div>
  );
}

export default App;
