import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { VscThreeBars } from 'react-icons/vsc';
import { orderBy, range } from 'lodash';
import { playlistData } from './playlist.js';
import './App.css';

// Practicing Beautiful DND (drop and drag)

function App() {
  const [playlist, setPlaylist] = useState(playlistData);

  const listRenderer = orderBy(playlist, 'position').map(item => (
    <Draggable draggableId={item.id.toString()} index={item.position} key={item.id}>
      {provided => (
        <div className="list-container-text" {...provided.draggableProps} ref={provided.innerRef}>
          <a {...provided.dragHandleProps} className="handle">
            <VscThreeBars />
          </a>
          <div>
            <img src={item.thumb} width="50%" />
          </div>
          <div>
            {item.position} - {item.title}
          </div>
          <div>{item.artist}</div>
          <div>{item.released}</div>
        </div>
      )}
    </Draggable>
  ));

  const onDragEnd = result => {
    // access where the task was initially and where it was dropped
    const { destination, source } = result;
    // make sure there is a change (moved item outside of draggable context area)
    if (!destination || !source) {
      return;
    }
    // make sure there is a change (moved item and returned i to same place)
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    // check the direction the item was dragged
    const directionOfDrag = destination.index > source.index ? 'GREATER' : 'LESS';
    // find the affected range
    let affectedRange;
    if (directionOfDrag === 'GREATER') {
      affectedRange = range(source.index, destination.index + 1);
    } else {
      affectedRange = range(destination.index, source.index);
    }
    // update positions
    const reOrderedPlaylist = playlistData.map(song => {
      if (song.id === parseInt(result.draggableId)) {
        // item dragged
        song.position = destination.index;
        return song;
      } else if (affectedRange.includes(song.position)) {
        // affected songs
        if (directionOfDrag === 'GREATER') {
          song.position = song.position - 1;
          return song;
        } else if (directionOfDrag === 'LESS') {
          song.position = song.position + 1;
          return song;
        }
      } else {
        // not in affected range
        return song;
      }
    });
    console.log('DND result', destination, source, directionOfDrag, affectedRange);
    // update playlist state
    setPlaylist(reOrderedPlaylist);
  };

  return (
    <div className="list-container">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="KINGC">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {listRenderer}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
