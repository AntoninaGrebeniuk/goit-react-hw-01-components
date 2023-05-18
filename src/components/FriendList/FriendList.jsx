import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import { Friends } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
