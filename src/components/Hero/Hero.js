import React from 'react'
import Tile from '../../assets/tile.png'
import './Hero.css'

export default function Hero({ showModal, videoEnded }) {
  function handleClick() {
    if (videoEnded) {
      window.location.reload()
    }
  }

  return (
    <div className={`hero-wrapper ${showModal ? 'blur' : ''}`}>
      <img
        className={!showModal ? 'image2' : ''}
        src={Tile}
        alt="Rookie Hero"
        style={{
          display: !showModal ? 'block' : 'none',
          cursor: videoEnded ? 'pointer' : 'auto',
        }}
        onClick={handleClick}
      />
    </div>
  )
}
