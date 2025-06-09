import "./App.css";

import React, { useState } from "react";

export default function App() {
  const [isStart, setIsStart] = useState(false);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleStart = () => {
    setIsStart(true);
  };

  const handleReset=()=>{
    setIsStart(false);
  }

  const handleInput=(e)=>{
    const value=parseInt(e.target.value);
    const id=e.target.id;
    if(id==='hours'){
      setHours(value);
    }else if(id==='minutes'){
      setMinutes(value);
    }else{
      setSeconds(value);
    }
  }


  return (
    <div className="App">
      <h1>Countdown Timer</h1>

      {!isStart && (
        <div className=" input-container">
          <div className=" input-box">
            <input onChange={handleInput} id="hours" placeholder="HH" />
            <input onChange={handleInput} id="minutes" placeholder="HH" />
            <input onChange={handleInput} id="seconds" placeholder="HH" />
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
            <button className="timer-button" onClick={handleReset}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
}
