import React from 'react';
import { wordDictionary } from './WordDictionary';
import { letterPoints } from './LetterPoints';
import './App.css';

// Calculate the words with higher word score on project-game05 (3Letters)

let workScore = 0;
let i = 0;
for (i = 0; i < wordDictionary.length; i++) {
  workScore =  letterPoints.find( x => {
               return (wordDictionary[i].charAt(0) === x.letter);
             }).point;
  workScore =  workScore + letterPoints.find( x => {
               return (wordDictionary[i].charAt(1) === x.letter);
             }).point;
  workScore =  workScore + letterPoints.find( x => {
               return (wordDictionary[i].charAt(2) === x.letter);
             }).point;
  if (workScore > 11) {console.log(wordDictionary[i],workScore)};
}

function App() {
  // press Alert button
  const pressNow = () => {
    const alertMessage = 'Only';
  };

  return (
    <div className="Alert">
      <h2>Word point values</h2>
      <div id="buttons">
        <button onClick={() => pressNow()}>About</button>
      </div>
    </div>
  );
}

export default App;
