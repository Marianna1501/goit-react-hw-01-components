import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import { FriendList } from './Friends.styled';

function FriendsList({ friends }) {
  return (
    <FriendList>
      {friends.map(({ id, avatar, isOnline, name }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} isOnline={isOnline} name={name} />
        </li>
      ))}
    </FriendList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendsList;
