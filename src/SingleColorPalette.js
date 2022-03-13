import React, { Component } from 'react'
import ColorBox from './ColorBox'
class SingleColorPalette extends Component {
  constructor(props) {
    super(props)

    this._shades = this.gatherShades(
      this.props.palette,
      this.props.colorId
    )

    console.log(this._shades)
  }

  gatherShades(palette, colorToFilterBy) {
    //TODO: this returs shades of all the colors
    let shades = []
    let allColors = palette.colors

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      )
    }
    return shades.slice(1)
  }
  render() {
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color.hex}
        showLink={false}
      />
    ))
    return (
      <div className='Palette'>
        <h1>SingleColorPalette</h1>
        <div className='Palette-colors'>{colorBoxes}</div>
      </div>
    )
  }
}
export default SingleColorPalette