import React, { useEffect, useState } from 'react'
import './Intro.css'

export default function Intro({ showModal, setShowModal, handleEnter }) {
  const [aContent, setAContent] = useState(['', '', '']);
  const [bContent, setBContent] = useState(['', '', '']);

  const spreadsheetId = process.env.REACT_APP_GOOGLE_SPREADSHEET_ID
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
  const apiURL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/sheet1!A2:B4?key=${apiKey}`

  useEffect(() => {
    // Fetch data from Google Sheets
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        data.values.forEach((row, rowIndex) => {
          row.forEach((cell, columnIndex) => {
            const value = cell || ''; // Set to empty string if undefined
            if (columnIndex === 0) {
              setAContent((prevAContent) => {
                const newAContent = [...prevAContent];
                newAContent[rowIndex] = value;
                return newAContent;
              });
            } else if (columnIndex === 1) {
              setBContent((prevBContent) => {
                const newBContent = [...prevBContent];
                newBContent[rowIndex] = value;
                return newBContent;
              });
            }
          });
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <h1>WELCOME TO ROOKIE PIZZA</h1>
        <h3>
          This website includes sound.
          <br />
          We recommend turning it on for the full experience.
        </h3>
        {aContent[0] ? <h3>{aContent[0]}</h3> : ''}
        {aContent[1] ? <h3>{aContent[1]}</h3> : ''}
        {aContent[2] ? <h3>{aContent[2]}</h3> : ''}
        {bContent[0] ? <p>{bContent[0]}</p> : ''}
        {bContent[1] ? <p>{bContent[1]}</p> : ''}
        {bContent[2] ? <p>{bContent[2]}</p> : ''}
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
