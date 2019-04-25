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

  updateHue = event => {
    this.setState({
      hue: event.target.value
    })
  }

  updateSaturation = event => {
    this.setState({
      saturation: event.target.value
    })
  }

  updateLightness = event => {
    this.setState({
      lightness: event.target.value
    })
  }

  render() {
    let color = `hsl(${this.state.hue},${this.state.saturation}%,${
      this.state.lightness
    }%)`
    return (
      <div className="App">
        <h1
          style={{
            textShadow: `0px 3px 0.5px hsl(${this.state.hue},${
              this.state.saturation
            }%,${this.state.lightness}%)`
          }}
        >
          Color Picker
        </h1>
        <div className="container">
          <div className="box" style={{ backgroundColor: color }} />
          <div className="sliders">
            <ul>
              <li>
                <input
                  type="range"
                  value={this.state.hue}
                  onChange={this.updateHue}
                  min="0"
                  max="360"
                />
                <label>Hue</label>
              </li>
              <li>
                <input
                  type="range"
                  value={this.state.saturation}
                  onChange={this.updateSaturation}
                  min="0"
                  max="100"
                />
                <label>Saturation</label>
              </li>
              <li>
                <input
                  type="range"
                  value={this.state.lightness}
                  onChange={this.updateLightness}
                  min="0"
                  max="100"
                />
                <label>Lightness</label>
              </li>
            </ul>
          </div>
        </div>
        <p>{color}</p>
      </div>
    )
  }
}

export default App
