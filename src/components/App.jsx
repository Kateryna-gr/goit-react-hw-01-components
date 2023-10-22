import { Fragment } from 'react';
import { Profile } from 'components/profile/profile';
import user from './profile/user.json';
import { Stats } from 'components/statistics/statistics';
import statsData from './statistics/data.json';
import { FriendList } from './friend-list/friend-list';
import friends from './friend-list/friends.json';
import { TransactionHistory } from './transaction-history/transaction-history';
import transactions from './transaction-history/transactions.json';

export const App = () => {
  return (
    <Fragment>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        photo={user.avatar}
        stats={user.stats}
      />
      <Stats title="Upload stats" statsData={statsData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Fragment>
  );
};
