import React, { useEffect, useState } from 'react'
import './Content.css'
import RookieVideo from '../../assets/rookiecommercial2023.mov'
import ReactPlayer from 'react-player'
import OrderButton from '../../assets/order-button-no-border.png'

export default function Content({
  videoEnded,
  showModal,
  playerRef,
  setVideoEnded,
}) {
  const [resLink, setResLink] = useState('')

  const spreadsheetId = process.env.REACT_APP_GOOGLE_SPREADSHEET_ID
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
  const apiURL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/sheet1!C2?key=${apiKey}`

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
          <img
            className="rookie-button-image"
            src={OrderButton}
            alt="Rookie Button"
          />
        </a>
      )}
    </div>
  )
}
