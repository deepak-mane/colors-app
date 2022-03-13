import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { makeStyles } from '@mui/styles'

import MiniPalette from './MiniPalette'
import './PaletteList.css'

const useStyles = makeStyles({
  root: {
    background: 'blue',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white'
  },

  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,30%)',
    gridGap: '5%'
  }
})

function PaletteList(props) {
  let navigate = useNavigate()

  const goToPalette = id => {
    navigate(`/palette/${id}`)
  }
  const classes = useStyles()
  const { palettes } = props
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.title}>React Colors</h1>
        </nav>
        <div className={classes.palettes}>
          {palettes.map(palette => (
            <MiniPalette
              key={palette.id}
              {...palette}
              handleClick={() => goToPalette(palette.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PaletteList
