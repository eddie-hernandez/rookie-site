import React, { useEffect, useState } from 'react'
import './Content.css'
import RookieVideo from '../../assets/rookiecommercial2023.mov'
import ReactPlayer from 'react-player'

export default function Content({
  videoEnded,
  showModal,
  playerRef,
  setVideoEnded,
  resLink
}) {

  return (
    <div className={videoEnded ? 'button-container' : 'video-container'}>
      {!videoEnded ? (
        <ReactPlayer
          ref={playerRef}
          url={RookieVideo}
          playing={!showModal}
          width="100%"
          height="100%"
          className="react-player"
          onEnded={() => {
            setVideoEnded(true)
          }}
          controls={false}
          playsinline
        />
      ) : (
        <a
          href={resLink}
          rel="noreferrer"
          target="_blank"
          className="rookie-button"
          style={{ display: videoEnded ? 'block' : 'none' }}
        >
          {/* <img
            className="rookie-button-image"
            src={OrderButton}
            alt="Rookie Button"
          /> */}
          reserve a pie
        </a>
      )}
    </div>
  )
}
