import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Name, Status } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
        <Status status={isOnline}></Status>
        <Avatar src={avatar} alt="User avatar"/>
        <Name>{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  avata: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
