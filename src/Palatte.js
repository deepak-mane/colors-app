import React, { Component } from 'react'

import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

import ColorBox from './ColorBox'
import './Palette.css'
class Palatte extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: 500
    }
    this.changeLevel = this.changeLevel.bind(this)
  }
  changeLevel(level) {
    this.setState({ level })
  }
  render() {
    const { colors } = this.props.palette
    const { level } = this.state
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ))
    return (
      <div className='Palatte'>
        <div className='slider'>
          <Slider
            defaultValue={this.state.level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>

        {/*Navbar goes here */}
        <div className='Palette-colors'>
          {/* bunch of color boxes */}
          {colorBoxes}
        </div>
        {/* footer goes here */}
      </div>
    )
  }
}
export default Palatte
