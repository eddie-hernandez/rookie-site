import React, {useEffect} from 'react'
import './Content.css'
import RookieVideo from '../../assets/rookiecommercial2023.mov'
import ReactPlayer from 'react-player'
import OrderButton from '../../assets/order-button-no-border.png'

export default function Content({ videoEnded, showModal, handleVideoEnded, playerRef }) {
  
    const handlePlayerReady = () => {
      if (playerRef.current) {
        playerRef.current.seekTo(0); // Start playing from the beginning
        playerRef.current.play();
      }
    };
  
    useEffect(() => {
      if (playerRef.current) {
        playerRef.current.seekTo(0);
      }
    }, []);

  return (
    <div className={videoEnded ? 'button-container' : 'video-container'}>
      {!showModal && !videoEnded ? (
        <ReactPlayer
          playerRef={playerRef}
          url={RookieVideo}
          playing={false}
          width='100%'
          height='100%'
          className='react-player'
          onEnded={handleVideoEnded}
          controls={false}
          onReady={handlePlayerReady}
          playsinline
        />
      ) : (
        <button
          className='rookie-button'
          style={{ display: videoEnded ? 'block' : 'none' }}
        >
          <img
            className='rookie-button-image'
            src={OrderButton}
            alt='Rookie Button'
          />
        </button>
      )}
    </div>
  )
}
