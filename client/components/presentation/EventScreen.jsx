import React, { PropTypes } from 'react';
import CategoriesList from '../container/CategoriesList';
import EventControls from './EventControls';

export default function EventScreen({ event, categories, onDelete }) {
  const featuredText = event.isFeatured ? <p className="event-screen-featured">Featured</p> : null;

  return (
    <div className="event-screen-content">
      <EventControls
        allowEdit
        eventId={event.id}
        onDelete={onDelete}
      />
      <p className="event-screen-title">{event.title}</p>
      {featuredText}
      <p className="event-screen-dates">{event.startDate} - {event.endDate}</p>
      <p className="event-screen-description">{event.description}</p>
      <CategoriesList categories={categories} />
    </div>
  );
}

EventScreen.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isFeatured: PropTypes.bool,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
  })),
  onDelete: PropTypes.func.isRequired,
};
