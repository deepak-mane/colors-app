import Palatte from './Palatte'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

import React, { Component } from 'react'

class App extends Component {
  render() {
    // console.log(generatePalette(seedColors[4]))
    return (
      <div>
        <Palatte palette={generatePalette(seedColors[4])} />
      </div>
    )
  }
}

export default App
