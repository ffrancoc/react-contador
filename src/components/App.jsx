import React from 'react'
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <h1>Simple contador en React</h1>
      <h2>0</h2>
      <div>
        <button>+</button>
        <button>-</button>
        <button>Reset</button>
      </div>
    </div>
  )
}

export default App