import React, { useState, useRef, useEffect } from 'react'
import './App.css'

import Hero from './components/Hero/Hero'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'
import Tokens from './components/Tokens/Tokens'
import Snake from './components/Snake/Snake'
import ScrollerText from './components/scrollerText/ScrollerText'

export default function App() {
  const [showModal, setShowModal] = useState(true)
  const [videoEnded, setVideoEnded] = useState(false)
  const [tokenWin, setTokenWin] = useState(false)
  const [resLink, setResLink] = useState('')
  const spreadsheetId = process.env.REACT_APP_GOOGLE_SPREADSHEET_ID
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
  const apiURL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/sheet1!C2?key=${apiKey}`
  const playerRef = useRef(null)

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

  useEffect(() => {
    // fetch data from Google Sheets
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setResLink(data.values[0][0])
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <>
      <ScrollerText showModal={showModal} />
      <div className="app-container">
        <div className={`outer-border ${showModal ? 'blur' : ''}`}>
          <div className="inner-border">
            <div className="body">
              {tokenWin ? (
                <Snake autoFocus={true} resLink={resLink} />
              ) : (
                <>
                  <Content
                    showModal={showModal}
                    videoEnded={videoEnded}
                    playerRef={playerRef}
                    setVideoEnded={setVideoEnded}
                    setResLink={setResLink}
                    resLink={resLink}
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
        <Intro showModal={showModal} setShowModal={setShowModal} />
        <Hero showModal={showModal} videoEnded={videoEnded} />
        <Footer showModal={showModal} />
      </div>
    </>
  )
}
