import Actions from '../../constants/actionTypeConstants';

export function loadCategories(categories) {
  return {
    categories,
    type: Actions.CATEGORIES_LOAD,
  };
}

export function createEventSuccess(event) {
  return {
    event,
    type: Actions.EVENT_CREATE,
  };
}

export function deleteEventSuccess(eventId) {
  return {
    eventId,
    type: Actions.EVENT_DELETE,
  };
}

export function loadEventCategories(eventId, categories) {
  return {
    eventId,
    categories,
    type: Actions.EVENT_GET_CATEGORIES,
  };
}

export function updateEventSuccess(event) {
  return {
    event,
    type: Actions.EVENT_UPDATE,
  };
}

export function loadEvents(events) {
  return {
    events,
    type: Actions.EVENTS_LOAD_ALL,
  };
}
