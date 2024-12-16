import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';

const PLAYERS = {
  X: 'Player 1 hoho',
  O: 'Player 2 momo',
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// TODO: know who is the active player driveen from game turns
function driveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

// TODO: handling the winner and return winner name
function driveWinnerName(gameBoard, players) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol].toUpperCase();
    }
  }

  return winner;
}

// TODO: janding gamin board and display symbols on it

function driveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((inner) => [...inner])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  let activePlayer = driveActivePlayer(gameTurns);

  // TODO: retriving the game board
  const gameBoard = driveGameBoard(gameTurns);

  // TODO: getting the winning player
  const winner = driveWinnerName(gameBoard, players);

  // TODO: handle Draw case
  const hasDraw = gameTurns.length === 9 && !winner;

  // TODO: handel turns whenever clicks on board
  function handleSelectedSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      let currentPlayer = driveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  // TODO: Restart the Gmae
  function handleRematch() {
    setGameTurns([]);
  }

  //TODO: display Player Name on game over if win
  function handleChangePlayerName(playerSymbol, playerName) {
    setPlayers((prevName) => {
      return {
        ...prevName,
        [playerSymbol]: playerName,
      };
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player
            onChangePlayerName={handleChangePlayerName}
            initialName={PLAYERS.X}
            symbol='X'
            isActive={activePlayer === 'X'}
          />
          <Player
            onChangePlayerName={handleChangePlayerName}
            initialName={PLAYERS.O}
            symbol='O'
            isActive={activePlayer === 'O'}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver
            onRematch={handleRematch}
            winner={winner}
            isDraw={hasDraw}
          />
        )}

        <GameBoard onSelectSquare={handleSelectedSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
