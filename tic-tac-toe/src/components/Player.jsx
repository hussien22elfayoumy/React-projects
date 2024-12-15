import { useState } from 'react';

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let player = <span className='player-name'>{playerName}</span>;

  if (isEditing) {
    player = (
      <input required onChange={handleChange} value={playerName} type='text' />
    );
  }

  return (
    <li className={isActive ? 'active' : ''}>
      <span className='player'>
        {player}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
