import React, { useEffect, useState } from 'react'
import './Intro.css'

export default function Intro({ showModal, setShowModal, handleEnter }) {
  const [headerContent, setHeaderContent] = useState('')
  const [postContent, setPostContent] = useState('')

  const spreadsheetId = process.env.REACT_APP_GOOGLE_SPREADSHEET_ID
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
  const apiURL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/sheet1!A2:B2?key=${apiKey}`

  useEffect(() => {
    // Fetch data from Google Sheets
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.values[0])
        setHeaderContent(data.values[0][0])
        setPostContent(data.values[0][1])
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <h1>WELCOME TO ROOKIE PIZZA</h1>
        <h3>
          This website includes sound.
          <br />
          We recommend turning it on for the full experience.
        </h3>
        <h3>{headerContent}</h3>
        <p>{postContent}</p>
        <br />
        <button
          onClick={() => {
            setShowModal(false)
          }}
        >
          ENTER SITE
        </button>
      </div>
    </div>
  )
}
