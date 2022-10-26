import FriendsCard from './FriendsCard';
import PropTypes from 'prop-types';
import { FriendList } from './Friends.styled';

function FriendsList({ friends }) {
  return (
    <FriendList>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendsCard
            avatar={friend.avatar}
            isOnline={friend.isOnline}
            name={friend.name}
          />
        </li>
      ))}
    </FriendList>
  );
}

FriendsList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default FriendsList;
