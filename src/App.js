import React, { Component } from 'react';
import './App.css';

let totalNum = 0;

class App extends Component {
  getRandonNumber = (start, range) => {
    let getRandom = Math.floor((Math.random() * range) +start);
    console.log("Roll", getRandom);
    return getRandom;
  }

  sumNumber = () => {
    totalNum += (this.getRandonNumber(1,6));
    if (totalNum > 30) {
      let score = document.getElementById("score");
      score.style.visibility = "hidden";
    }
    console.log("Running total", totalNum);
    return totalNum;
  }

render() {
    return ( 
      <React.Fragment>
          <div><p>
              <span>Score: </span><span>{this.totalNum}</span>
          </p></div>
          <div><button id="score" onClick={() => this.sumNumber()}>Add</button></div>
          <div><p>
              <span>Roll: </span><span>{this.getRandon}</span>
          </p></div>
      </React.Fragment>
      );
  }
}

// {this.sumNumber()}
// {this.getRandonNumber(1,6)}

export default App;
