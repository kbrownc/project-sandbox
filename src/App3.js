import React, { useEffect } from "react";
import {AsyncStorage,} from 'react';
import './App.css';
import DATA from './ZonAnn.Ts+dSST.csv';
import Chart from 'chart.js/auto';


const xLabels = [];
const yTemps = [];

// // read-in a CSV file and create a line chart 
//    (this was never finished as the .text method is duplicating the data.)
function App() {
  async function getData() {
    console.log('getData executed');
    const response = await fetch(DATA);
    const data = await response.text();
    console.log('data',data);
  //  console.log('split data',data.split('\n'));
    const table = data.split('\n').slice(1); 
    table.forEach(row => {
      const columns = row.split(',');
      const year = columns[0];
      xLabels.push(year);
      const temp = columns[1];
      yTemps.push(parseFloat(temp) + 14);
    })
  };
  getData();

  useEffect( () => {
    console.log('useEffect executed');
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: xLabels,
          datasets: [{
              label: 'Global Average Temperature',
              data: yTemps,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
         }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: false
              }
          }
      }
    });
  });
  return (
    <div className="temp">
      <h2>Processing CSV file in a Chart</h2>
      <p>CSV Data</p>
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
}

export default App;
