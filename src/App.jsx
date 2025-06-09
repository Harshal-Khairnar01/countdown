
import './App.css'

import React from 'react'

export default function App() {
  return (
    <div className='App'>
      <h1>Countdown Timer</h1>
      <div className=' input-container'>
        <div className=' input-box'>
          <input id="hours" placeholder='HH' />
          <input id="hours" placeholder='HH' />
          <input id="hours" placeholder='HH' />
        </div>
        <button className=' timer-button'>
          Start
        </button>
      </div>
    </div>
  )
}

