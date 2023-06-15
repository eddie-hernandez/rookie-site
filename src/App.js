import React, { useState, useRef, useEffect } from 'react'
import './App.css'

import Hero from './components/Hero/Hero'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'
import Tokens from './components/Tokens/Tokens'
import Snake from './components/Snake/Snake'

export default function App() {
  const [showModal, setShowModal] = useState(true)
  const [videoEnded, setVideoEnded] = useState(false)
  const [tokenWin, setTokenWin] = useState(false)
  const [muted, setMuted] = useState(true)
  const playerRef = useRef(null)

  const handleEnter = () => {
    setShowModal(false)
    if (playerRef.current) {
      setMuted(false)
      playerRef.current.seekTo(0);
      playerRef.current.play();
    }
  }

  useEffect(() => {
    if (videoEnded || tokenWin) {
      const gameBoardContainer = document.querySelector('.snake-board')

      if (gameBoardContainer) {
        gameBoardContainer.focus()
      }
    }
  }, [videoEnded, tokenWin])

  // detecting the viewport based on browser/device

  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  return (
    <div className='app-container'>
      <div className={`outer-border ${showModal ? 'blur' : ''}`}>
        <div className='inner-border'>
          <div className='body'>
            {tokenWin ? (
              <Snake autoFocus={true} />
            ) : (
              <>
                <Content
                  showModal={showModal}
                  videoEnded={videoEnded}
                  playerRef={playerRef}
                  setVideoEnded={setVideoEnded}
                  muted={muted}
                />
                <Tokens
                  videoEnded={videoEnded}
                  tokenWin={tokenWin}
                  setTokenWin={setTokenWin}
                />
              </>
            )}
          </div>
        </div>
      </div>
      <Intro showModal={showModal} handleEnter={handleEnter} />
      <Hero showModal={showModal} />
      <Footer showModal={showModal} />
    </div>
  )
}
