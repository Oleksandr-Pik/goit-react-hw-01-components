import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import friendsData from 'data/friends.json';
import transactionsData from 'data/transactions.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friendsData} />

      <TransactionHistory transactions={transactionsData} />
    </Container>
  );
};
