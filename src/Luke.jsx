import React, { useState, useCallback } from 'react'

// Luke's version of the roll dice code

const gameWinningPosition = 30;

export default class AppClass extends React.Component {
  state = { playerPosition: 0 }

  onRoll = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    this.setState((oldState) => ({
      playerPosition: Math.min(oldState.playerPosition + roll, gameWinningPosition)
    }))
  }

  render = () => {
    const isGameDone = this.state.playerPosition >= gameWinningPosition;

    return (
      <div>
        <span>{this.state.playerPosition}</span>
        { isGameDone ? null : <button onClick={this.onRoll}>Roll</button> }
      </div>
    );
  }
}

// Function Component Version
// --------------------------

// export default () => {
//   const [playerPosition, setPlayerPosition] = useState(0);

//   const onRoll = useCallback(() => {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     setPlayerPosition((playerPosition) => Math.min(playerPosition + roll, gameWinningPosition))
//   });

//   const isGameDone = playerPosition >= gameWinningPosition;

//   return (
//     <div>
//       <span>{playerPosition}</span>
//       { isGameDone ? null : <button onClick={onRoll} >Roll</button> }
//     </div>
//   )
// }
