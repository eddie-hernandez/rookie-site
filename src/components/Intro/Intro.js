import React from 'react'
import './Intro.css'

export default function Intro({ showModal, handleEnter }) {

  const handleClick = () => {
    // trigger video playback and unmute
    handleEnter()
  }

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className='modal-content'>
        <h1>Welcome to Rookie Pizza!</h1>
        <h3>
          This website includes sound. <br />We recommend turning it on for the full
          experience.
        </h3>
        <p></p>
        <button onClick={handleClick}>Enter Site</button>
      </div>
    </div>
  )
}
