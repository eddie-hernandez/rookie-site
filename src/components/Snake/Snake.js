import React, { useState, useEffect, useRef } from 'react'
import {
  Button,
  Window,
  WindowContent,
  WindowHeader,
  ScrollView,
} from 'react95'
import { ThemeProvider } from 'styled-components'
import original from 'react95/dist/themes/original'
import pixelPizza from '../../assets/pixel-pizza.png'
import './Snake.css'
import './SnakeBoard.css'

export default function Snake({ resLink }) {
  function useKeyboardInput(callback) {
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

  function getRandomFoodPosition() {
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
  const [score, setScore] = useState(0)
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

  function handleButtonClick(keyCode) {
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

    // cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [snake, gameOver])

  useEffect(() => {
    if (playing) {
      // add focus to the game board
      gameBoardRef.current.focus()
    }
  }, [playing])

  function moveSnake() {
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

    // check for self-collision
    for (let i = 1; i < snake.length; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        setGameOver(true)
        // end game when snake runs into itself
        return
      }
    }

    if (head.x === food.x && head.y === food.y) {
      // snake has eaten the food
      setFood(getRandomFoodPosition())
      setSpeed(speed - 5)
      setScore(score + 1)

      // grow snake by adding a new segment to head position
      const newSnake = [head, ...snake]
      setSnake(newSnake)
    } else {
      // remove tail segment when snake doesn't eat food
      const newSnake = [head, ...snake.slice(0, -1)]
      setSnake(newSnake)
    }

    if (head.x < 0 || head.x >= 10 || head.y < 0 || head.y >= 10) {
      setGameOver(true)
    }
  }

  function handleStartGame() {
    setScore(0)
    setGameOver(false)
    setSnake([{ x: 5, y: 5 }])
    setDirection('RIGHT')
    setFood(getRandomFoodPosition())
    setSpeed(200)
    setPlaying(true)
  }

  function calculateSegmentStyle(segment, boardWidth, boardHeight) {
    const cellSize = Math.min(boardWidth, boardHeight) / 10
    return {
      top: `${segment.y * cellSize}px`,
      left: `${segment.x * cellSize}px`,
      width: `${cellSize}px`,
      height: `${cellSize}px`,
    }
  }

  function calculateFoodStyle(boardWidth, boardHeight) {
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
        <div className="snake-failure-container">
          <Window className="snake-failure-window">
            <WindowHeader>
              <span
                style={{
                  fontFamily: 'ms_sans_serif',
                  float: 'left',
                  paddingLeft: '0.5vh',
                }}
              >
                PizzaPlayer 2000XP
              </span>
            </WindowHeader>
            <ScrollView style={{ width: '100%', height: '80%' }}>
              <div className="snake-failure-content">
                <h2>woah there buddy,</h2>
                <h3>
                  to play snake, you gotta rotate your device to portrait mode.
                </h3>
              </div>
            </ScrollView>
          </Window>
        </div>

        <div className="snake-container">
          <Window className="snake-window">
            <WindowHeader>
              <span
                style={{
                  fontFamily: 'ms_sans_serif',
                  float: 'left',
                  paddingLeft: '0.5vh',
                }}
              >
                PizzaPlayer 2000XP
              </span>
            </WindowHeader>
            <WindowContent>
              <div className="snake-content">
                <div className="snake-screen">
                  {playing ? (
                    <>
                      {gameOver ? (
                        <>
                          <div className="snake-title-and-play">
                            <h4
                              className="snake-title"
                            >
                              wow, bud, you lost
                            </h4>
                            <h4 className='snake-title'>score: {score}</h4>
                            <Button
                              onClick={handleStartGame}
                              className="snake-play-button"
                            >
                              Play Again?
                            </Button>
                            <Button
                              as="a"
                              className="snake-reserve-button"
                              href={resLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Reserve a Pie
                            </Button>
                          </div>
                        </>
                      ) : (
                        <div
                          className="snake-board"
                          ref={gameBoardRef}
                          tabIndex="0"
                        >
                          {snake.map((segment, index) => (
                            <div
                              className="snake-segment"
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
                            className="food"
                            src={pixelPizza}
                            alt="Food"
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
                    <div className="snake-title-and-play">
                      <div>
                        <h3 className="snake-title">snake: rookie edition</h3>
                      </div>
                      <Button
                        className="snake-play-button"
                        onClick={handleStartGame}
                      >
                        Press Play
                      </Button>
                    </div>
                  )}
                </div>
                <div className="snake-controls">
                  <div className="snake-buttons">
                    <div className="row-1">
                      <Button
                        className="matrix-button"
                        onClick={() => handleButtonClick(38)}
                      >
                        &uarr;
                      </Button>
                    </div>
                    <div className="row-2">
                      <Button
                        className="matrix-button"
                        onClick={() => handleButtonClick(37)}
                      >
                        &larr;
                      </Button>
                      <Button
                        className="matrix-button"
                        onClick={() => handleButtonClick(39)}
                      >
                        &rarr;
                      </Button>
                    </div>
                    <div className="row-3">
                      <Button
                        className="matrix-button"
                        onClick={() => handleButtonClick(40)}
                      >
                        &darr;
                      </Button>
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
