import React from 'react'
import './ScrollerText.css'

export default function ScrollerText({ showModal }) {
  return showModal ? (
    <>
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} className={`scrolling-text-container row-${i + 1}`}>
          <div
            className={`scrolling-text-wrapper-${
              i % 2 === 0 ? 'left' : 'right'
            }`}
          >
            <h1 className="scrolling-text">rookie pizza</h1>
            <h1 className="scrolling-text">rookie pizza</h1>
            <h1 className="scrolling-text">rookie pizza</h1>
            <h1 className="scrolling-text">rookie pizza</h1>
            <h1 className="scrolling-text">rookie pizza</h1>
            <h1 className="scrolling-text">rookie pizza</h1>
            <h1 className="scrolling-text">rookie pizza</h1>
            <h1 className="scrolling-text">rookie pizza</h1>
            <h1 className="scrolling-text">rookie pizza</h1>
            <h1 className="scrolling-text">rookie pizza</h1>
          </div>
          <div
            className={`scrolling-text-wrapper-${
              i % 2 === 0 ? 'left' : 'right'
            }`}
          >
            <h1 className="scrolling-text">rookie pizza</h1>
            <h1 className="scrolling-text">rookie pizza</h1>
            <h1 className="scrolling-text">rookie pizza</h1>
            <h1 className="scrolling-text">rookie pizza</h1>
            <h1 className="scrolling-text">rookie pizza</h1>
            <h1 className="scrolling-text">rookie pizza</h1>
            <h1 className="scrolling-text">rookie pizza</h1>
            <h1 className="scrolling-text">rookie pizza</h1>
            <h1 className="scrolling-text">rookie pizza</h1>
            <h1 className="scrolling-text">rookie pizza</h1>
          </div>
        </div>
      ))}
    </>
  ) : (
    ''
  )
}

//     <>
//       <div className="scrolling-text-container row-1">
//         <div className="scrolling-text-wrapper-left">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//         <div className="scrolling-text-wrapper-left">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//       </div>
//       <div className="scrolling-text-container row-2">
//         <div className="scrolling-text-wrapper-right">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//         <div className="scrolling-text-wrapper-right">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//       </div>
//       <div className="scrolling-text-container row-3">
//         <div className="scrolling-text-wrapper-left">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//         <div className="scrolling-text-wrapper-left">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//       </div>
//       <div className="scrolling-text-container row-4">
//         <div className="scrolling-text-wrapper-right">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//         <div className="scrolling-text-wrapper-right">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//       </div>
//       <div className="scrolling-text-container row-5">
//         <div className="scrolling-text-wrapper-left">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//         <div className="scrolling-text-wrapper-left">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//       </div>
//       <div className="scrolling-text-container row-6">
//         <div className="scrolling-text-wrapper-right">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//         <div className="scrolling-text-wrapper-right">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//       </div>
//       <div className="scrolling-text-container row-7">
//         <div className="scrolling-text-wrapper-left">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//         <div className="scrolling-text-wrapper-left">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//       </div>
//       <div className="scrolling-text-container row-8">
//         <div className="scrolling-text-wrapper-right">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//         <div className="scrolling-text-wrapper-right">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//       </div>
//       <div className="scrolling-text-container row-9">
//         <div className="scrolling-text-wrapper-left">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//         <div className="scrolling-text-wrapper-left">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//       </div>
//       <div className="scrolling-text-container row-10">
//         <div className="scrolling-text-wrapper-right">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//         <div className="scrolling-text-wrapper-right">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//       </div>
//       <div className="scrolling-text-container row-11">
//         <div className="scrolling-text-wrapper-left">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//         <div className="scrolling-text-wrapper-left">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//       </div>
//       <div className="scrolling-text-container row-12">
//         <div className="scrolling-text-wrapper-right">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//         <div className="scrolling-text-wrapper-right">
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//           <h1 className="scrolling-text">rookie pizza</h1>
//         </div>
//       </div>
//     </>
//   ) : (
//     ''
//   )
// }
