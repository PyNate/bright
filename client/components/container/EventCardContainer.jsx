import React, { PropTypes } from 'react';
import EventCard from '../presentation/EventCard';
import { deleteEvent } from '../../store/reduxActions';

export default function EventCardContainer({ eventId, title, isFeatured, dispatch }) {
  const classNames = isFeatured ? 'event-card' : 'event-card featured';

  function onDelete() {
    dispatch(deleteEvent(eventId));
  }

  return (
    <li className={classNames}>
      <EventCard
        eventId={eventId}
        title={title}
        isFeatured={isFeatured}
        onDelete={onDelete}
      />
    </li>
  );
}

EventCardContainer.propTypes = {
  eventId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isFeatured: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};
