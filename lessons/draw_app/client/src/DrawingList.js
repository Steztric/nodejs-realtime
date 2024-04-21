import React, { useState, useEffect } from 'react';
import { subscribeToDrawings } from './api';

export default function DrawingList() {
  const [drawings, setDrawings] = useState([]);

  useEffect(() => {
    subscribeToDrawings((drawing) => {
      setDrawings((prevDrawings) => prevDrawings.concat(drawing));
    });
  }, []);

  const drawing_items = drawings.map((drawing) => (
    <li
      className='DrawingList-item'
      key={drawing.id}
    >{drawing.name}</li>
  ))

  return (
    <ul className='DrawingList'>{drawing_items}</ul>
  )
};