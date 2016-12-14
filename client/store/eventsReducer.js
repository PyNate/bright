import Actions from '../../constants/actionTypeConstants';

export default function events(state = {}, action) {
  let newEvent;
  let updatedEvents;

  switch (action.type) { // eslint-disable-line default-case
    case Actions.EVENT_CREATE:
      return Object.assign({}, state, { [action.event.id]: action.event });

    case Actions.EVENT_DELETE:
      updatedEvents = Object.assign({}, state);
      delete updatedEvents[action.eventId];
      return updatedEvents;

    case Actions.EVENT_GET_CATEGORIES:
      updatedEvents = Object.assign({}, state);
      updatedEvents[action.eventId] = Object.assign({}, updatedEvents[action.eventId], { categories: [action.categories[0]] });
      return updatedEvents;

    case Actions.EVENT_UPDATE:
      updatedEvents = Object.assign({}, state)
      updatedEvents = [];
      state.forEach((event) => {
        if (event.id === action.eventId) {
          updatedEvents.push(action.event);
        } else {
          updatedEvents.push(event);
        }
      });
      return updatedEvents;

    case Actions.EVENTS_LOAD_ALL:
      updatedEvents = Object.assign({}, state);
      action.events.forEach((event) => {
        updatedEvents[event.id] = event;
      });
      return updatedEvents;
  }

  return state;
}
