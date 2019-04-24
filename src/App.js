import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Color Picker</h1>
      <div className="container">
        <div className="box" />
        <div className="sliders">
          <ul>
            <li>
              <input type="range" min="0" max="360" />
              <label>Hue</label>
            </li>
            <li>
              <input type="range" min="0" max="100" />
              <label>Saturation</label>
            </li>
            <li>
              <input type="range" min="0" max="100" />
              <label>Lightness</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
