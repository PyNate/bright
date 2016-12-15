import React, { PropTypes } from 'react';
import EventControls from './EventControls';

export default function EventCard({ eventId, title, isFeatured, onDelete }) {
  const featuredText = isFeatured ? <p className="event-card-featured">Featured</p> : null;

  return (
    <div className="event-card-content">
      <div className="event-card-header">
        <p className="event-card-id">{eventId}</p>
        {featuredText}
      </div>
      <p className="event-card-title">{title}</p>
      <EventControls
        eventId={eventId}
        onDelete={onDelete}
      />
    </div>
  );
}

EventCard.propTypes = {
  eventId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isFeatured: PropTypes.bool,
  onDelete: PropTypes.func.isRequired,
};
