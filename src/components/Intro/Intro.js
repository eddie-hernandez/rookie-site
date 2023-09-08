import React, { useEffect, useState } from 'react'
import './Intro.css'
import flamingRookie from '../../assets/coollogo_com-21215934.gif'
import {
  Button,
  Window,
  WindowContent,
  WindowHeader,
  ScrollView,
} from 'react95'
import { ThemeProvider } from 'styled-components'
import original from 'react95/dist/themes/original'

export default function Intro({ showModal, setShowModal, handleEnter }) {
  const [aContent, setAContent] = useState(['', '', ''])
  const [bContent, setBContent] = useState(['', '', ''])
  const [handleButtonVariant, setHandleButtonVariant] = useState(false)

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
            const value = cell || '' // Set to empty string if undefined
            if (columnIndex === 0) {
              setAContent((prevAContent) => {
                const newAContent = [...prevAContent]
                newAContent[rowIndex] = value
                return newAContent
              })
            } else if (columnIndex === 1) {
              setBContent((prevBContent) => {
                const newBContent = [...prevBContent]
                newBContent[rowIndex] = value
                return newBContent
              })
            }
          })
        })
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  //   return (
  //     <>
  //       <ThemeProvider theme={original}>
  //         <div className={`modal ${showModal ? 'show' : ''}`}>
  //           <Window>
  //             <WindowHeader>
  //               <span
  //                 style={{
  //                   fontFamily: 'ms_sans_serif',
  //                   float: 'left',
  //                   paddingLeft: '0.5vh',
  //                 }}
  //               >
  //                 PizzaPlayer 2000XP
  //               </span>
  //             </WindowHeader>
  //             <WindowContent className="modal-content-container">
  //               <ScrollView style={{ width: '100%', height: '100%' }}>
  //                 <img
  //                   src={flamingRookie}
  //                   alt="silly flaming rookie text"
  //                   className="rookie-modal-logo"
  //                 />
  //                 <div className="modal-content">
  //                   <div className="modal-header">
  //                     {aContent[0] ? <h1>{aContent[0]}</h1> : ''}
  //                     {aContent[1] ? <h3>{aContent[1]}</h3> : ''}
  //                     {aContent[2] ? <h3>{aContent[2]}</h3> : ''}
  //                   </div>
  //                   <div className="modal-comment">
  //                     {bContent[0] ? <p>{bContent[0]}</p> : ''}
  //                     {bContent[1] ? <p>{bContent[1]}</p> : ''}
  //                     {bContent[2] ? <p>{bContent[2]}</p> : ''}
  //                   </div>
  //                 </div>
  //                 {handleButtonVariant ? (
  //                   <Button active>ENTER SITE</Button>
  //                 ) : (
  //                   <Button
  //                     onClick={() => {
  //                       setShowModal(false)
  //                       setHandleButtonVariant(true)
  //                     }}
  //                   >
  //                     ENTER SITE
  //                   </Button>
  //                 )}
  //               </ScrollView>
  //             </WindowContent>
  //           </Window>
  //         </div>
  //       </ThemeProvider>
  //     </>
  //   )
  // }

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content-container">
        <img
          src={flamingRookie}
          alt="silly flaming rookie text"
          className="rookie-modal-logo"
        />
        <div className="modal-content">
          <div className="modal-header">
            {aContent[0] ? <h1 className='modal-header-content'>{aContent[0]}</h1> : ''}
            {aContent[1] ? <h3 className='modal-header-content'>{aContent[1]}</h3> : ''}
            {aContent[2] ? <h3 className='modal-header-content'>{aContent[2]}</h3> : ''}
          </div>
          <div className="modal-comment">
            {bContent[0] ? <p className='modal-comment-content'>{bContent[0]}</p> : ''}
            {bContent[1] ? <p className='modal-comment-content'>{bContent[1]}</p> : ''}
            {bContent[2] ? <p className='modal-comment-content'>{bContent[2]}</p> : ''}
          </div>
        </div>
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
