import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, symbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex, e) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard.map((inner) => [...inner])];
      updatedBoard[rowIndex][colIndex] = symbol;
      return updatedBoard;
    });

    onSelectSquare();
    e.target.disabled = true;
  }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={(e) => handleSelectSquare(rowIndex, colIndex, e)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
