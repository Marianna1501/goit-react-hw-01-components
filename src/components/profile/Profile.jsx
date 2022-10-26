import PropTypes from 'prop-types';
import {
  GeneralWrapper,
  Wrapper,
  Avatar,
  Name,
  Tag,
  Location,
  Statistics,
  Label,
  Quantity,
} from './Profile.styled';

export default function Profile({
  avatar,
  username = 'Jacques Gluke',
  tag,
  location,
  stats,
}) {
  return (
    <GeneralWrapper>
      <Wrapper>
        <Avatar src={avatar} alt="UserPhoto" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Wrapper>

      <Statistics>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Statistics>
    </GeneralWrapper>
  );
}

Profile.protoTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};
