import React, { useState, useEffect } from "react";
import './App.css';

// // read-in a url and return JSON data
function App() {
  const [lat, setlat] = useState("");
  const [long, setlong] = useState("");

  useEffect( () => {
    fetch("https://api.wheretheiss.at/v1/satellites/25544")
      .then((response) => response.json())
      .then((data) => {
        setlat(data.latitude);
        setlong(data.longitude);
        console.log(data);
      })
  }, []);
  return (
    <div>
      <div>ISS Location in Space</div>
      <div>Longitude: {long}</div>
      <div>Latitude: {lat}</div>
    </div>
  );
}

export default App;
