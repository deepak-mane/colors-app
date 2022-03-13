import React, { Component } from 'react'

import ColorBox from './ColorBox'
import Navbar from './Navbar'
import './Palette.css'
class Palatte extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: 500,
      format: 'hex'
    }
    this.changeLevel = this.changeLevel.bind(this)
    this.changeFormat = this.changeFormat.bind(this)
  }
  changeLevel(level) {
    this.setState({ level })
  }

  changeFormat(val) {
    this.setState({ format: val })
    console.log(this.state.format)
  }
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette
    const { level, format } = this.state
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={id}
        moreUrl={`/palette/${id}/${color.id}`}
        showLink={true}
      />
    ))
    return (
      <div className='Palette'>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        {/*Navbar goes here */}
        <div className='Palette-colors'>
          {/* bunch of color boxes */}
          {colorBoxes}
        </div>
        {/* footer goes here */}
        <footer className='Palatte-footer'>
          {paletteName}
          <span className='emoji'>{emoji}</span>
        </footer>
      </div>
    )
  }
}
export default Palatte
