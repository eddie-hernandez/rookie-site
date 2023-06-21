import React from 'react'
import './Content.css'
import RookieVideo from '../../assets/rookiecommercial2023.mov'
import ReactPlayer from 'react-player'
import OrderButton from '../../assets/order-button-no-border.png'

export default function Content({ videoEnded, showModal, playerRef, setVideoEnded }) {

  return (
    <div className={videoEnded ? 'button-container' : 'video-container'}>
      {!videoEnded ? (
        <ReactPlayer
          ref={playerRef}
          url={RookieVideo}
          playing={!showModal}
          width='100%'
          height='100%'
          className='react-player'
          onEnded={() => {setVideoEnded(true)}}
          controls={false}
          playsinline
        />
      ) : (
        <button
          className='rookie-button'
          style={{ display: videoEnded ? 'block' : 'none' }}
        >
          <img
            className='rookie-button-image'
            src={OrderButton}
            alt='Rookie Button'
          />
        </button>
      )}
    </div>
  )
}