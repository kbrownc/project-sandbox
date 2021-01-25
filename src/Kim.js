import React, { Component } from 'react';
import './App.css'; 

// Kim's version of the roll dice code with the roll number valie (doesn't work)

class App extends Component {
  state = { totalNum: 0, getRandom: 0 }
  
  getRandonNumber = (start, range) => {
    this.setState(prevState => 
          ({getRandom: Math.floor((Math.random() * range) + start)}),
          (() => {console.log("Roll", this.state.getRandom)})
      );
    return this.state.getRandom;
  };

   sumNumber = () => {
    this.setState(prevState => ({totalNum: prevState.totalNum + this.getRandonNumber(1,6) }))
    return this.state.totalNum
  };

  sumNumberM = () => {
    this.sumNumber();
    if (this.state.totalNum > 30) {
      let score = document.getElementById("score");
      score.style.visibility = "hidden";
    } 
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
          <div><button id="score" onClick={() => this.sumNumberM()}>Add</button></div>
          <div><p>
              <span>Roll: </span><span>{this.state.getRandom}</span>
          </p></div>
      </React.Fragment>
      );
  }
}

export default App;