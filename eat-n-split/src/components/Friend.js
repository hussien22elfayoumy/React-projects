import Button from './Button';

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className='red'>
          you ows {friend.name} {Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className='green'>
          {friend.name} ows you {friend.balance}
        </p>
      )}

      {friend.balance === 0 && <p>you and {friend.name} are even</p>}
      <Button>Select</Button>
    </li>
  );
}

export default Friend;
