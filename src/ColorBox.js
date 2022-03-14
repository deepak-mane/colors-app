import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import chroma from 'chroma-js'
import { makeStyles } from '@mui/styles'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './ColorBox.css'

const useStyles = makeStyles({
  copyText: {
    color: {
      darktext: 'black',
      lighttext: 'white'
    }
  }

  // copyText: {
  //   color: props =>
  //     chroma(props.background).luminance() >= 0.4 ? 'black' : 'white'
  // },
  // colorName: {
  //   color: props =>
  //     chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'
  // }
})

function ColorBox(props) {
  const classes = useStyles()
  const [copied, setCopied] = useState(false)

  const changeCopyState = () => {
    setCopied(true)
  }
  useEffect(() => {
    let timer1
    if (copied) {
      timer1 = setTimeout(() => setCopied(false), 1500)
    }

    return () => {
      clearTimeout(timer1)
    }
  }, [copied])

  const { name, background, paletteId, id, moreUrl, showLink } = props
  // console.log(
  //   'name:',
  //   name,
  //   'background',
  //   background,
  //   'paletteId',
  //   paletteId
  // )

  // console.log(chroma(background).luminance())
  const isDarkColor = chroma(background).luminance() <= 0.08
  const isLightColor = chroma(background).luminance() >= 0.4
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className='ColorBox'>
        <div
          style={{ background }}
          className={`copy-overlay ${copied && 'show'}`}
        />
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>copied!</h1>
          <p className={`${isLightColor && 'dark-text'}`}>
            {props.background}
          </p>
        </div>
        <div className='copy-container'>
          <div className='box-content'>
            <span className={isDarkColor && 'light-text'}>
              {name}
              {/*chroma(background).luminance()*/}
            </span>
          </div>
          <button
            className={`copy-button ${isLightColor && 'dark-text'}`}
          >
            Copy
          </button>
        </div>
        {showLink && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span
              className={`see-more ${isLightColor && 'dark-text'} `}
            >
              More
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox
