import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import EventsList from './components/container/EventsList';
import CreateEventContainer from './components/container/CreateEventContainer';
import EventScreenContainer from './components/container/EventScreenContainer';
import store from './store/reduxStore';
import App from './components/App';
import {
  getAllEvents,
  getAllCategories,
  getCategoriesForEventId,
} from './util/dataRequests';

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={EventsList} onEnter={getAllEvents} />
        <Route
          path="/event/:eventId"
          onEnter={({ params }) => { getCategoriesForEventId(params.eventId); }}
          component={EventScreenContainer}
        />
        {/* <Route path="/event/:eventId"/edit component={EditEventContainer} /> */}
        <Route
          path="/create"
          component={CreateEventContainer}
        />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app')); // eslint-disable-line no-undef
