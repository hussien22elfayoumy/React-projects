import Friend from './Friend';

function FriendsList({ friends, onAddNewFriends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onAddNewFriends={onAddNewFriends}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
