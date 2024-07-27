import React, { useState, useEffect } from 'react';
import Canvas from 'simple-react-canvas';
import { publishLine, subscribeToDrawingLines } from "./api";

export default function Drawing(props) {
  const [lines, updateLines] = useState([]);

  useEffect(() => {
    subscribeToDrawingLines(props.drawing.id, (line) => updateLines([...lines, line]));
  }, []);

  function handleDraw(line) {
    publishLine({
      drawingId: props.drawing.id,
      line
    });
  }

  return (
    props.drawing ? (
      <div className="Drawing">
        <div className="Drawing-title">{props.drawing.name}</div>
        <Canvas
          drawingEnabled={true}
          onDraw={handleDraw}
          lines={lines} />
      </div>
    ) : null
  )
}