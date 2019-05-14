import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hue: Math.ceil(Math.random() * 360),
      saturation: Math.ceil(Math.random() * 100),
      lightness: Math.ceil(Math.random() * 100),
      alpha: 1
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

  updateAlpha = event => {
    this.setState({
      alpha: event.target.value
    })
  }

  pickRandomColor = event => {
    //set state to random generated values
    this.setState({
      hue: Math.ceil(Math.random() * 360),
      saturation: Math.ceil(Math.random() * 100),
      lightness: Math.ceil(Math.random() * 100),
      alpha: 1
    })
  }

  render() {
    //variable creates hsla values from state
    let color = `hsla(${this.state.hue},${this.state.saturation}%,${
      this.state.lightness
    }%,${this.state.alpha})`
    return (
      <div className="App">
        <h1
          style={{
            textShadow: `0px 3px 0.5px hsl(${this.state.hue},${
              this.state.saturation
            }%,${this.state.lightness}%,${this.state.alpha})`
          }}
        >
          Color Picker
        </h1>
        <div className="container">
          <div className="backgroundBox">
            <div className="box" style={{ backgroundColor: color }} />
          </div>
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
                <label>H</label>
              </li>
              <li>
                <input
                  type="range"
                  value={this.state.saturation}
                  onChange={this.updateSaturation}
                  min="0"
                  max="100"
                />
                <label>S</label>
              </li>
              <li>
                <input
                  type="range"
                  value={this.state.lightness}
                  onChange={this.updateLightness}
                  min="0"
                  max="100"
                />
                <label>L</label>
              </li>
              <li>
                <input
                  type="range"
                  value={this.state.alpha}
                  onChange={this.updateAlpha}
                  min="0"
                  max="1"
                  step=".01"
                />
                <label>A</label>
              </li>
            </ul>
          </div>
        </div>
        <p>{color}</p>
        <button onClick={this.pickRandomColor}>Random Color!</button>
      </div>
    )
  }
}

export default App
