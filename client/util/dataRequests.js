import Axios from 'axios';
import store from '../store/reduxStore';
import {
  loadCategories,
  loadEventCategories,
  loadEvents,
  createEventSuccess,
  editEventSuccess,
  deleteEventSuccess,
 } from '../store/reduxActions';

const axios = Axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
});

export function getAllEvents() {
  return axios.get('/events')
    .then((res) => {
      store.dispatch(loadEvents(res.data));
      return res.data;
    });
}

export function getAllCategories() {
  return axios.get('/categories')
    .then((res) => {
      store.dispatch(loadCategories(res.data));
      return res.data;
    });
}

export function getCategoriesForEventId(eventId) {
  return axios.get(`/events/${eventId}/categories`)
    .then((res) => {
      store.dispatch(loadEventCategories(eventId, res.data));
      return res.data;
    });
}

export function createEvent(event) {
  return axios.post('/events', { ...event })
    .then((res) => {
      const eventWithId = Object.assign({}, event, { id: res.data });
      store.dispatch(createEventSuccess(eventWithId));
      return res.data;
    });
}

export function updateEvent(event) {
  return axios.put(`/events/${event.id}`, { ...event })
    .then((res) => {
      store.dispatch(updateEventSuccess(event));
      return res.data;
    });
}

export function deleteEvent(eventId) {
  return axios.delete(`/events/${eventId}`)
    .then((res) => {
      store.dispatch(deleteEventSuccess(eventId));
      return res.data;
    });
}
