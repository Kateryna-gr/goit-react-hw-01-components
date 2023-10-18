import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from 'components/App';
import { Profile } from 'components/profile/profile';
import data from './components/profile/user.json';
import { Stats } from 'components/statistics/statistics';
import statsData from 'components/statistics/data.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App> */}
      <Profile
        username={data.username}
        tag={data.tag}
        location={data.location}
        photo={data.avatar}
        stats={data.stats}
      />
      <Stats title="Upload stats" statsData={statsData} />
    {/* </App> */}
  </React.StrictMode>
);
