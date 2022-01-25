import React from 'react';
import {AsyncStorage,} from 'react';
import './App.css';
import DATA from './ZonAnn.Ts+dSST.csv';


function App() {
  async function getData() {
    const response = await fetch(DATA);
    const data = await response.text();
     const table = data.split('\n').slice(1); 
     table.forEach(row => {
      const columns = row.split(',');
      const year = columns[0];
      const temp = columns[1];
      console.log(year, temp);
     })
  };
  // // process a CSV file
  getData();
  return (
    <div className="Alert">
      <h2>Processing CSV file</h2>
      <div id="buttons">
        <p>CSV Data</p>
        <div></div>
      </div>
    </div>
  );
}

export default App;
