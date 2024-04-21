import React from 'react';
import './App.css';
import DrawingForm from './DrawingForm';
import DrawingList from './DrawingList';

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Our awesome drawing app</h2>
      </div>
        <DrawingForm />
        <DrawingList />
    </div>
  );
};
