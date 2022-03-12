import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Palatte from './Palatte'
import Home from './Home'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'
class App extends Component {
  render() {
    // console.log(generatePalette(seedColors[4]))
    return (
      <Routes>
        <Route exact='true' path='/' element={<Home />} />
        <Route
          exact='true'
          path='/palette/:id'
          element={
            <Palatte palette={generatePalette(seedColors[1])} />
          }
        />
        } />
      </Routes>
      // <div>
      //   <Palatte palette={generatePalette(seedColors[1])} />
      // </div>
    )
  }
}

export default App
