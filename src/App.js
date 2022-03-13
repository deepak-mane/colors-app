import React, { Component } from 'react'
import {
  Routes,
  Route,
  useParams,
  useNavigate
} from 'react-router-dom'
import Palatte from './Palatte'
import PaletteList from './PaletteList'
import SingleColorPalette from './SingleColorPalette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

function App() {
  let navigate = useNavigate()
  const findPalette = id => {
    // console.log('Inside findPalette', id)
    return seedColors.find(function (palette) {
      return palette.id === id
    })
  }

  const PaletteWrapper = () => {
    const { id } = useParams()
    // console.log('Inside PaletteWrapper', id)
    const item = findPalette(id)
    // console.log('Inside PaletteWrapper', item.colors)
    return <Palatte palette={generatePalette(item)} />
  }
  const SingleColorWrapper = () => {
    const { paletteId, colorId } = useParams()
    // console.log('Inside SingleColorWrapper', paletteId, colorId)
    const item = findPalette(paletteId)
    // console.log('Inside SingleColorWrapper', item.colors)
    return (
      <SingleColorPalette
        colorId={colorId}
        palette={generatePalette(item)}
      />
    )
  }
  return (
    <Routes>
      <Route
        exact='true'
        path='/palette/:paletteId/:colorId'
        element={<SingleColorWrapper />}
      />

      <Route
        exact='true'
        path='/palette/:id'
        element={<PaletteWrapper />}
      />
      <Route
        exact='true'
        path='/'
        element={<PaletteList palettes={seedColors} />}
      />
    </Routes>
    // <div>
    //   <Palatte palette={generatePalette(seedColors[1])} />
    // </div>
  )
}

export default App
