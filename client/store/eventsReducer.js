import Actions from '../../constants/actionTypeConstants';

export default function events(state = [], action) {
  let newEvent;
  let updatedEvents;

  switch (action.type) { // eslint-disable-line default-case
    case Actions.EVENT_CREATE:
      updatedEvents = state.slice();
      newEvent = action.event;
      newEvent.id = state.length; // Assumes no IDs were created remotely until update can happen
      updatedEvents.push(newEvent);
      return updatedEvents;

    case Actions.EVENT_DELETE:
      updatedEvents = [];
      state.forEach((event) => {
        if (!event.id === action.eventId) {
          updatedEvents.push(event);
        }
      });
      return updatedEvents;

    case Actions.EVENT_GET_CATEGORIES:
      updatedEvents = [];
      state.forEach((event) => {
        if (event.id === action.eventId) {
          updatedEvents.push(Object.assign({}, event, action.categories));
        } else {
          updatedEvents.push(event);
        }
      });
      return updatedEvents;

    case Actions.EVENT_UPDATE:
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
      return action.events;
  }

  return state;
}
