import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import { ListItem } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <ListItem key={friend.id}>
          <FriendListItem 
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          />
        </ListItem>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
