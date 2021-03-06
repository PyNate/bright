import { createStore, combineReducers } from 'redux';
import events from './eventsReducer';
import categories from './categoriesReducer';

const rootReducer = combineReducers({
  events,
  categories,
});

export default createStore(rootReducer);
