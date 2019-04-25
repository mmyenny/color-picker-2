import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hue: 0,
      saturation: 0,
      lightness: 0
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Color Picker</h1>
        <div className="container">
          <div className="box" />
          <div className="sliders">
            <ul>
              <li>
                <input type="range" value={this.state.hue} min="0" max="360" />
                <label>Hue</label>
              </li>
              <li>
                <input
                  type="range"
                  value={this.state.saturation}
                  min="0"
                  max="100"
                />
                <label>Saturation</label>
              </li>
              <li>
                <input
                  type="range"
                  value={this.state.lightness}
                  min="0"
                  max="100"
                />
                <label>Lightness</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
