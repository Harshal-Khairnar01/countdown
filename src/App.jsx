import "./App.css";

import React, { useState } from "react";

export default function App() {
  const [isStart, setIsStart] = useState(false);
  const handleStart = () => {
    setIsStart(true);
  };
  return (
    <div className="App">
      <h1>Countdown Timer</h1>

      {!isStart && (
        <div className=" input-container">
          <div className=" input-box">
            <input id="hours" placeholder="HH" />
            <input id="hours" placeholder="HH" />
            <input id="hours" placeholder="HH" />
          </div>
          <button onClick={handleStart} className=" timer-button">
            Start
          </button>
        </div>
      )}

      {isStart && (
        <div className="show-container">
          <div className="timer-box">
            <div>10</div>
            <span>:</span>
            <div>10</div>
            <span>:</span>
            <div>10</div>
          </div>
          <div className="action-box">
            <button className="timer-button">Pause</button>
            <button className="timer-button">Reset</button>
          </div>
        </div>
      )}
    </div>
  );
}
