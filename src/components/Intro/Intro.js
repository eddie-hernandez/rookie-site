import React from 'react'
import './Intro.css'

export default function Intro({ showModal, setShowModal, handleEnter }) {


  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className='modal-content'>
        <h1>Welcome to Rookie Pizza!</h1>
        <h3>
          This website includes sound. <br />We recommend turning it on for the full
          experience.
        </h3>
        <p></p>
        <button onClick={() => {setShowModal(false)}}>Enter Site</button>
      </div>
    </div>
  )
}
