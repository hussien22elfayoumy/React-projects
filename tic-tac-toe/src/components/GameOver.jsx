export default function GameOver({ winner, isDraw }) {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {isDraw ? <p>Draw!</p> : <p>{winner} Won!</p>}
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
