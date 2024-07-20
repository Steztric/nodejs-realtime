import React, { Component } from 'react';
import Canvas from 'simple-react-canvas';

export default function Drawing(props) {
  return (
    props.drawing ? (
      <div className="Drawing">
        <div className="Drawing-title">{props.drawing.name}</div>
        <Canvas drawingEnabled={true} />
      </div>
    ) : null
  )
}