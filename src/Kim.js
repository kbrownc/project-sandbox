import React, { Component } from 'react';
import './App.css'; 

// Kim's version of the roll dice code with the roll number value (with Luke's mods)

class App extends Component {
  state = { totalNum: 0, getRandom: 0 }

   sumNumber = () => {
    let newRoll = Math.floor(Math.random() * 6) + 1;
    this.setState((prevState) => ({
      totalNum: prevState.totalNum + newRoll, 
      getRandom: newRoll }))
  };

render() {
  if (this.state.totalNum > 30) {
      let score = document.getElementById("score");
      score.style.visibility = "hidden";
    } 
    return ( 
      <React.Fragment>
          <div><p>
              <span>Score: </span><span>{this.state.totalNum}</span>
          </p></div>
          <div><button id="score" onClick={() => this.sumNumber()}>Add</button></div>
          <div><p>
              <span>Roll: </span><span>{this.state.getRandom}</span>
          </p></div>
      </React.Fragment>
      );
  }
}

export default App;