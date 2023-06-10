import React from 'react'
import './Footer.css'
import Insta from '../../assets/insta.png'
import Email from '../../assets/email.png'

export default function Footer({showModal}) {
  return (
    <div className={`footer ${showModal ? 'blur' : ''}`}>
      <h4 className='app-name'>
        Rookie Pizza &#169; 2023 All Rights Reserved.{' '}
      </h4>
      <div className='social-media-icons'>
        <a href='https://instagram.com/rookie.pizza'>
          <img src={Insta} alt='Instagram' />
        </a>
        <a href='mailto:rookiepizzaco@gmail.com'>
          <img src={Email} alt='Email' />
        </a>
      </div>
    </div>
  )
}
