import React from 'react'
import './ModalFooter.css'

export default function ModalFooter({ showModal }) {
  return (
    <div className='modal-footer'>
      <h4 className='modal-footer-text'>
        This website includes sound.
        <br />
        We recommend turning it on for the full experience.
      </h4>
    </div>
  )
}
