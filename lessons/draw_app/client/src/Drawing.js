import React from 'react';
import Canvas from 'simple-react-canvas';
import { publishLine } from "./api";

export default function Drawing(props) {
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
          onDraw={handleDraw} />
      </div>
    ) : null
  )
}