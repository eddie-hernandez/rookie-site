import React from 'react'
import Tile from '../../assets/tile.png'
import './Hero.css'

export default function Hero({ showModal }) {
  return (
    <div className={`hero-wrapper ${showModal ? 'blur' : ''}`}>
      <img className={!showModal ? 'image2' : ''} src={Tile} alt='Rookie Hero' style={{display: !showModal ? 'block' : 'none'}} />
    </div>
  )
}
