import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendList.styled';

export function FriendItem({ avatar, name, isOnline }) {
  return (
    <Item>
      <Status status={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name status={isOnline}>{name}</Name>
    </Item>
  );
}

FriendItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
