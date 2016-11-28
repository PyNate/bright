import Axios from 'axios';
import store from '../store/reduxStore';
import {
  loadCategories,
  loadEventCategories,
  loadEvents,
 } from '../store/reduxActions';

const axios = Axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
});

export function getAllEvents() {
  axios.get('/events')
    .then((res) => {
      store.dispatch(loadEvents(res.data));
    });
}

export function getAllCategories() {
  axios.get('/categories')
    .then((res) => {
      store.dispatch(loadCategories(res.data));
    });
}

export function getCategoriesForEventId(eventId) {
  axios.get(`/events/${eventId}/categories`)
    .then((res) => {
      store.dispatch(loadEventCategories(eventId, res.data));
    });
}

export function createEvent(event) {
  axios.post('/events', { ...event });
}

export function updateEvent(event) {
  axios.put(`/events/${event.id}`, { ...event });
}

export function deleteEvent(eventId) {
  axios.delete(`/events/${eventId}`);
}
