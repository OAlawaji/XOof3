import { useState, useEffect } from 'react'
import './App.css'
import Block from './block.jsx'
import WinnerAnnouncement from './winnerAnnouncement.jsx'
import Title from './title.jsx'
function App () {
  const [turn, setTurn] = useState('X')
  const [XArray, setXArray] = useState(new Array(3).fill(null))
  const [OArray, setOArray] = useState(new Array(3).fill(null))

  const [winner, setWinner] = useState(null)
  const [board, setBoard] = useState(Array(9).fill(''))

  useEffect(() => {
    checkWinner()
  }, [XArray, OArray, board])

  const winningCombos = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // top-left to bottom-right diagonal
    [2, 4, 6] // top-right to bottom-left diagonal
  ]

  function getTurn () {
    setTurn(turn === 'X' ? 'O' : 'X')
    return turn
  }
  function checkWinner () {
    for (let i = 0; i < winningCombos.length; i++) {
      const combo = winningCombos[i]
      if (XArray.every(val => combo.includes(val))) {
        setWinner('X')
        console.log('Winner: X')
        break
      } else if (OArray.every(val => combo.includes(val))) {
        setWinner('O')
        console.log('Winner: O')
        break
      }
    }
  }

  function updateBoard (i) {
    if (board[i] === '') {
      updateArrays(i)
      const updatedBoard = [...board]
      updatedBoard[i] = getTurn()
      setBoard(updatedBoard)
    }
  }
  function innerUpdateArrays (prevArray, i) {
    const deletedValue = prevArray[0]
    const newArray = [...prevArray.slice(1), i]
    // console.log("X ARRAAY UPDATED: " + newArray);
    setBoard(prevBoard => {
      const newBoard = [...prevBoard]
      newBoard[deletedValue] = ''
      return newBoard
    })
    return newArray
  }
  function updateArrays (i) {
    turn === 'X'
      ? // TURN INTO ONE OUTER FUNCTION
        setXArray(prevArray => innerUpdateArrays(prevArray, i))
      : setOArray(prevArray => innerUpdateArrays(prevArray, i))
  }
  return (
    <div
      className='background flex flex-col gap-4
    justify-center items-center 
    min-h-screen relative'
      style={{
        backgroundColor: '#282c34',
        color: '#61dafb',
        textAlign: 'center'
      }}
    >
      <Title turn={turn} />
      <div
        className='grid grid-cols-3 gap-1 '
        style={{ width: '300px', height: '300px' }}
      >
        {board.map((item, i) => (
          <Block
            key={i}
            index={i}
            element={board[i]}
            onUpdate={() => updateBoard(i)}
            animate={XArray[0] === i || OArray[0] === i}
          />
        ))}
      </div>
      <br />
      <Title turn={turn} className='md:hidden rotate-180' />
      {winner && <WinnerAnnouncement winner={winner} />}
    </div>
  )
}
export default App
