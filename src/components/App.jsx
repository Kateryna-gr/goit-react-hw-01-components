import { Fragment } from 'react';
import { Profile } from 'components/profile/profile';
import data from './profile/user.json';
import { Stats } from 'components/statistics/statistics';
import statsData from './statistics/data.json';

export const App = () => {
  return (
    <Fragment>
      <Profile
        username={data.username}
        tag={data.tag}
        location={data.location}
        photo={data.avatar}
        stats={data.stats}
      />
      <Stats title="Upload stats" statsData={statsData} />
    </Fragment>
  );
};
