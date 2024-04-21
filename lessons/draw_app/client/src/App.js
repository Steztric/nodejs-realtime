import React, { useState, useEffect } from 'react';
import './App.css';
import { subscribeToTimer } from './api';

export default function App() {
  const [timestamp, setTimestamp] = useState('no timestamp yet');

  useEffect(() => {
    subscribeToTimer((timestamp) => {
      setTimestamp(timestamp);
    });
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h2>Our awesome drawing app</h2>
      </div>
      This is the value of the timer timestamp: {timestamp}
    </div>
  );
};
