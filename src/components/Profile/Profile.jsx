import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Avatar,
  Description,
  Name,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = ({
  username,
  tag,
  avatar,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
