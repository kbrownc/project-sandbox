import React, { } from 'react'
import './App.css';

// Playing

const letterPoints = [ 
    { key: 1, letter: 'A', point: 1 }, 
    { key: 2, letter: 'B', point: 3 },
    { key: 3, letter: 'C', point: 3 },
    { key: 4, letter: 'D', point: 2 },
    { key: 5, letter: 'E', point: 1 },
    { key: 6, letter: 'F', point: 4 },
    { key: 7, letter: 'G', point: 2 },
    { key: 8, letter: 'H', point: 4 },
    { key: 9, letter: 'I', point: 1 },
    { key: 10, letter: 'J', point: 8 },
    { key: 11, letter: 'K', point: 5 },
    { key: 12, letter: 'L', point: 1 },
    { key: 13, letter: 'M', point: 3 },
    { key: 14, letter: 'N', point: 1 },
    { key: 15, letter: 'O', point: 1 },
    { key: 16, letter: 'P', point: 3 },
    { key: 17, letter: 'Q', point: 10 },
    { key: 18, letter: 'R', point: 1 },
    { key: 19, letter: 'S', point: 1 },
    { key: 20, letter: 'T', point: 1 },
    { key: 21, letter: 'U', point: 1 },
    { key: 22, letter: 'V', point: 4 },
    { key: 23, letter: 'W', point: 4 },
    { key: 24, letter: 'X', point: 8 },
    { key: 25, letter: 'Y', point: 4 },
    { key: 26, letter: 'Z', point: 10 },
  ];

  const lookupLetter = 'M';

  const score = letterPoints.find((item) => {
    return item.letter === lookupLetter }).point; 

   // const indexA = letterPoints.find((item) => {
   //  if (item.letter === lookup)
   //  return item });

  console.log('***** score',score);

class App extends React.Component {
  render = () => {
    return (
      <div>
      <h2>Playing with findIndex</h2>
      <div className="Board">
        <div className="Box Box9" style={{gridColumn: 1, gridRow: 1}}>{score}</div>
      </div>
      </div>
    );
  }
}

export default App;