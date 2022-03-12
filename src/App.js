import React, { Component } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import Palatte from './Palatte'
import Home from './Home'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

function App() {
  const findPalette = id => {
    console.log('Inside findPalette', id)
    return seedColors.find(function (palette) {
      return palette.id === id
    })
  }

  const PaletteWrapper = () => {
    const { id } = useParams()
    console.log('Inside PaletteWrapper', id)
    const item = findPalette(id)
    console.log('Inside PaletteWrapper', item.colors)
    return <Palatte palette={generatePalette(item)} />
  }

  return (
    <Routes>
      <Route exact='true' path='/' element={<Home />} />
      <Route
        exact='true'
        path='/palette/:id'
        element={<PaletteWrapper />}
      />
    </Routes>
    // <div>
    //   <Palatte palette={generatePalette(seedColors[1])} />
    // </div>
  )
}

export default App
