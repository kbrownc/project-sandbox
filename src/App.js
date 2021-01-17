import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { totalNum: 0, getRandom: 0 }
  
  getRandonNumber = (start, range) => {
    this.setState({getRandom: Math.floor((Math.random() * range) +start), });
    console.log("Roll", this.state.getRandom);
    return this.state.getRandom;
  }

  sumNumber = () => {
    this.setState({totalNum: this.state.totalNum + this.getRandonNumber(1,6), });
    if (this.state.totalNum > 30) {
      let score = document.getElementById("score");
      score.style.visibility = "hidden";
    }
    console.log("Running total", this.state.totalNum);
    return this.state.totalNum;
  }

render() {
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
