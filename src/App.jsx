import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendsList from './components/friends-list/FriendsList';
import Transaction from './components/transaction-history/Transaction';
import { Wrapper } from 'components/container/Container.styled';

import user from './components/profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';
import friends from './components/friends-list/friends.json';
import transactions from './components/transaction-history/transactions.json';


export default function App() {
  return (
    <Wrapper>
      <Profile
        username={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Wrapper>
        <Statistics title="Upload stats" stats={statisticalData} />
      </Wrapper>

      <Wrapper>
        <FriendsList friends={friends} />
      </Wrapper>

      <Wrapper>
        <Transaction items={transactions} />
      </Wrapper>
    </Wrapper>
  );
}
