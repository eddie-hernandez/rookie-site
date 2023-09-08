import React, { useState } from 'react'
import flag from '../../assets/flag.png'
import './Tokens.css'

export default function Tokens({ videoEnded, tokenWin, setTokenWin }) {
  const [tokenNumber, setTokenNumber] = useState('one')


  const tokenNumbers = [
    'one',
    'two',
    'three',
    'four',
    'five',
  ]

  function tokenChange() {
    const currentIndex = tokenNumbers.indexOf(tokenNumber)
    if (tokenNumber === 'five') {
      setTokenWin(!tokenWin)
      return
    } else if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % tokenNumbers.length
      setTokenNumber(tokenNumbers[nextIndex])
    }
    return tokenNumber
  }

  return (
    <div style={{ display: videoEnded ? 'block' : 'none' }}>
      <img
        style={{ display: tokenWin ? 'none' : 'block' }}
        className={`token ${tokenNumber}`}
        onClick={() => tokenChange()}
        src={flag}
        alt='rookie token'
      />
    </div>
  )
}
