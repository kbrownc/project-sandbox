import React, { } from 'react'
import './App.css';

// Luke's version of the roll dice code with my addition of the roll number valie

export default class AppClass extends React.Component {
  state = { playerPosition: 0,   roll: 0 }

  onRoll = () => {
    let newRoll = Math.floor(Math.random() * 6) + 1;
    console.log("Roll", newRoll);
    this.setState((oldState) => ({
      roll: newRoll,
      playerPosition: Math.min(oldState.playerPosition + newRoll, 30)
    }))
  };

  render = () => {
    const isGameDone = this.state.playerPosition >= 30;
    console.log("Total", this.state.playerPosition);
    return (
      <div>
        <div><span>Roll: </span><span>{this.state.roll}</span></div>
         <div><span>Total: </span><span>{this.state.playerPosition}</span></div>
        { isGameDone ? null : <button onClick={this.onRoll}>Dice</button> }
      </div>
    );
  }
}