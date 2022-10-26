import PropTypes from 'prop-types';
import { FriendList, ListItem, Status } from './Friends.styled';

export default function Friends({ isOnline, avatar, name }) {
  return (
    <div>
      <FriendList>
        <ListItem>
          <Status className="status" isOnline={isOnline}></Status>
          <img className="avatar" src={avatar} alt="name" width="48" />
          <p className="name">{name}</p>
        </ListItem>
      </FriendList>
    </div>
  );
}

Friends.protoTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
