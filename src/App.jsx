import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendList/FriendsList';
import Transaction from './components/TransactionHistory/Transaction';
import { Wrapper } from 'components/Container/Container.styled';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

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
