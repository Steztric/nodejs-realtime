import React, { useState } from 'react';
import { createDrawing } from './api';

export default function DrawingForm() {
  const [drawingName, setDrawingName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    createDrawing(drawingName);
    setDrawingName('');
  };

  return (
    <div className='Form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={drawingName}
          onChange={(evt) => setDrawingName(evt.target.value)}
          placeholder='Drawing name'
          className='Form-drawingInput'
          required />
        <button
          type='submit'
          className='Form-drawingInput'>
          Create
        </button>
      </form>
    </div>
  )
};