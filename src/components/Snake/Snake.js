import React, { useState, useEffect, useRef } from 'react'
import { Button, Window, WindowContent, WindowHeader } from 'react95'
import { ThemeProvider } from 'styled-components'
import original from 'react95/dist/themes/original'
import pixelPizza from '../../assets/pixel-pizza.png'
import './Snake.css'
import './SnakeBoard.css'

export default function Snake({ autoFocus }) {
  const useKeyboardInput = (callback) => {
    useEffect(() => {
      const handleKeyDown = (event) => {
        callback(event.keyCode)
      }

      document.addEventListener('keydown', handleKeyDown)

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [callback])
  }

  const getRandomFoodPosition = () => {
    return {
      x: Math.floor(Math.random() * 10),
      y: Math.floor(Math.random() * 10),
    }
  }

  const gameBoardRef = useRef(null)
  const [snake, setSnake] = useState([{ x: 5, y: 5 }])
  const [direction, setDirection] = useState('RIGHT')
  const [food, setFood] = useState(getRandomFoodPosition())
  const [speed, setSpeed] = useState(100)
  const [playing, setPlaying] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  useKeyboardInput((keyCode) => {
    if ((keyCode === 38 || keyCode === 87) && direction !== 'DOWN') {
      setDirection('UP')
    } else if ((keyCode === 40 || keyCode === 83) && direction !== 'UP') {
      setDirection('DOWN')
    } else if ((keyCode === 37 || keyCode === 65) && direction !== 'RIGHT') {
      setDirection('LEFT')
    } else if ((keyCode === 39 || keyCode === 68) && direction !== 'LEFT') {
      setDirection('RIGHT')
    }
  })

  const handleButtonClick = (keyCode) => {
    if (keyCode === 38 && direction !== 'DOWN') {
      setDirection('UP')
    } else if (keyCode === 40 && direction !== 'UP') {
      setDirection('DOWN')
    } else if (keyCode === 37 && direction !== 'RIGHT') {
      setDirection('LEFT')
    } else if (keyCode === 39 && direction !== 'LEFT') {
      setDirection('RIGHT')
    }
  }

  useKeyboardInput(handleButtonClick)

  useEffect(() => {
    if (gameOver) {
      return
    }

    const interval = setInterval(moveSnake, speed)

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [snake, gameOver])

  useEffect(() => {
    if (playing) {
      gameBoardRef.current.focus() // Focus the game board container when the game starts
    }
  }, [playing])

  const moveSnake = () => {
    const head = { ...snake[0] }

    switch (direction) {
      case 'UP':
        head.y--
        break
      case 'DOWN':
        head.y++
        break
      case 'LEFT':
        head.x--
        break
      case 'RIGHT':
        head.x++
        break
      default:
        break
    }

    // Check for self-collision
    for (let i = 1; i < snake.length; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        setGameOver(true)
        return // Exit the function early
      }
    }

    if (head.x === food.x && head.y === food.y) {
      // Snake has eaten the food
      setFood(getRandomFoodPosition())
      setSpeed(speed - 5)

      // Grow the snake by adding a new segment to the head position
      const newSnake = [head, ...snake]
      setSnake(newSnake)
    } else {
      // Remove the tail segment when the snake doesn't eat the food
      const newSnake = [head, ...snake.slice(0, -1)]
      setSnake(newSnake)
    }

    if (head.x < 0 || head.x >= 10 || head.y < 0 || head.y >= 10) {
      setGameOver(true)
    }
  }

  const handleStartGame = () => {
    setGameOver(false)
    setSnake([{ x: 5, y: 5 }])
    setDirection('RIGHT')
    setFood(getRandomFoodPosition())
    setSpeed(200)
    setPlaying(true)
  }

  const calculateSegmentStyle = (segment, boardWidth, boardHeight) => {
    const cellSize = Math.min(boardWidth, boardHeight) / 10
    return {
      top: `${segment.y * cellSize}px`,
      left: `${segment.x * cellSize}px`,
      width: `${cellSize}px`,
      height: `${cellSize}px`,
    }
  }

  const calculateFoodStyle = (boardWidth, boardHeight) => {
    const cellSize = Math.min(boardWidth, boardHeight) / 10
    return {
      top: `${food.y * cellSize}px`,
      left: `${food.x * cellSize}px`,
      width: `(${cellSize}px`,
      height: `${cellSize}px`,
    }
  }
  return (
    <>
      <ThemeProvider theme={original}>
        <div className='snake-container'>
          <Window className='snake-window'>
            <WindowHeader>
              <span
                style={{
                  fontFamily: 'ms_sans_serif',
                  float: 'left',
                  paddingLeft: '0.5vh',
                }}
              >
                RookiePlayer 2000XP
              </span>
            </WindowHeader>
            <WindowContent>
              <div className='snake-content'>
                <div className='snake-screen'>
                  {playing ? (
                    <>
                      {gameOver ? (
                        <div className='snake-title-and-play'>
                          <div className='snake-title'>
                            <h3>You lose :(</h3>
                            <Button
                              onClick={handleStartGame}
                              className='snake-play-button'
                            >
                              Play Again
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div
                          className='snake-board'
                          ref={gameBoardRef}
                          tabIndex='0'
                        >
                          {snake.map((segment, index) => (
                            <div
                              className='snake-segment'
                              key={index}
                              style={calculateSegmentStyle(
                                segment,
                                gameBoardRef.current
                                  ? gameBoardRef.current.offsetWidth
                                  : 0,
                                gameBoardRef.current
                                  ? gameBoardRef.current.offsetHeight
                                  : 0
                              )}
                            />
                          ))}
                          <img
                            className='food'
                            src={pixelPizza}
                            alt='Food'
                            style={calculateFoodStyle(
                              gameBoardRef.current
                                ? gameBoardRef.current.offsetWidth
                                : 0,
                              gameBoardRef.current
                                ? gameBoardRef.current.offsetHeight
                                : 0
                            )}
                          />
                        </div>
                      )}
                    </>
                  ) : (
                    <div className='snake-title-and-play'>
                      <div>
                        <h3 className='snake-title'>Snake</h3>
                      </div>
                      <Button
                        className='snake-play-button'
                        onClick={handleStartGame}
                      >
                        Press Play
                      </Button>
                    </div>
                  )}
                </div>
                <div className='snake-controls'>
                  <Button className='snake-reserve-button'>
                    Reserve a Pie
                  </Button>
                  <div className='snake-buttons'>
                    <div className='row-1'>
                      <button onClick={() => handleButtonClick(38)}>
                        &uarr;
                      </button>
                    </div>
                    <div className='row-2'>
                      <button onClick={() => handleButtonClick(37)}>
                        &larr;
                      </button>
                      <button onClick={() => handleButtonClick(39)}>
                        &rarr;
                      </button>
                    </div>
                    <div className='row-3'>
                      <button onClick={() => handleButtonClick(40)}>
                        &darr;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </WindowContent>
          </Window>
        </div>
      </ThemeProvider>
    </>
  )
}
