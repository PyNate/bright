import React from 'react';
import { IndexLink } from 'react-router';
import NavLink from './presentation/NavLink';

const NAV_ITEM = 'nav-item';

export default function App({ children }) { // eslint-disable-line react/prop-types
  return (
    <div>
      <h1>React Router Tutorial</h1>
      <ul className="nav">
        <li className={NAV_ITEM}><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        <li className={NAV_ITEM}><NavLink to="/create">Create Event</NavLink></li>
      </ul>
      {children}
    </div>
  );
}
