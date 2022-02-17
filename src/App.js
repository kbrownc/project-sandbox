import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { VscThreeBars } from "react-icons/vsc";
import { orderBy } from "lodash";
import { playlistData } from './playlist.js';
import './App.css';


// Practicing Beautiful DND (drop and drag)

function App() {

  const [playlist, setPlaylist] = useState(playlistData);

  const listRenderer = orderBy(playlist, "position").map((item) => (
    <div className="list-container-text" key={item.id}>
      <a className="handle">
        <VscThreeBars />
      </a>
      <div>
        <img src={item.thumb} width="50%"/>
      </div>
      <div>
        {item.position} - {item.title}
      </div>
      <div>{item.artist}</div>
      <div>{item.released}</div>
    </div>
  ));

  return (
    <div className="list-container">
      {listRenderer}
    </div>
  );
}

export default App;
