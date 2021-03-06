import React from 'react';
import { IndexLink } from 'react-router';
import NavLink from './presentation/NavLink';

require('../styles/main.scss');

const NAV_ITEM = 'nav-item';

export default function App({ children }) { // eslint-disable-line react/prop-types
  return (
    <div>
      <nav>
        <h1 className="logo">Coding Challenge</h1>
        <ul className="nav-actions">
          <li className={NAV_ITEM}><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li className={NAV_ITEM}><NavLink to="/create">Create Event</NavLink></li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
