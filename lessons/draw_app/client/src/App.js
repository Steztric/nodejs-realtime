import React, { useState } from 'react';
import './App.css';
import DrawingForm from './DrawingForm';
import DrawingList from './DrawingList';
import Drawing from './Drawing';

export default function App() {
  const [selectedDrawing, selectDrawing] = useState(null);

  const ctrl = selectedDrawing ? (
    <Drawing
      drawing={selectedDrawing}
      key={selectedDrawing.id} />
  ) : (
    <div>
      <DrawingForm />
      <DrawingList selectDrawing={selectDrawing} />
    </div>
  );

  return (
    <div className="App">
      <div className="App-header">
        <h2>Our awesome drawing app</h2>
      </div>
      {ctrl}
    </div>
  );
};
