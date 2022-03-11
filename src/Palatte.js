import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Palette.css'
class Palatte extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} />
    ))
    return (
      <div className='Palatte'>
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
