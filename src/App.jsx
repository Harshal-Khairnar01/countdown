import "./App.css";

import React, { useEffect, useState } from "react";

export default function App() {
  const [isStart, setIsStart] = useState(false);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [timerId, setTimerId] = useState(0);

  const handleStart = () => {
    setIsStart(true);
  };

  const handleReset = () => {
    setIsStart(false);
  };

  const handleInput = (e) => {
    const value = parseInt(e.target.value);
    const id = e.target.id;
    if (id === "hours") {
      setHours(value);
    } else if (id === "minutes") {
      setMinutes(value);
    } else {
      setSeconds(value);
    }
  };

  const runTimer=(sec,min,hr,tid)=>{
    if(sec>0){
      setSeconds((s)=>s-1);
    }else if(sec===0 && min>0){
      setMinutes((m)=>m-1);
      setSeconds(59);
    }else{
      setHours((h)=>h-1);
      setMinutes(59);
      setSeconds(59);
    }
  }

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(seconds,minutes,hours,tid)
      }, 1000);
      setTimerId(tid);
    }

    return()=>{
      clearInterval(tid);
    }
  }, [isStart, hours, minutes, seconds]);

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
            <div>{hours<10?`0${hours}`:hours}</div>
            <span>:</span>
            <div>{minutes<10?`0${minutes}`:minutes}</div>
            <span>:</span>
            <div>{seconds<10?`0${seconds}`:seconds}</div>
          </div>
          <div className="action-box">
            <button className="timer-button">Pause</button>
            <button className="timer-button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
