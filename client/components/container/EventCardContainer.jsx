import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import EventCard from '../presentation/EventCard';
import { deleteEvent } from '../../util/dataRequests';

export default function EventCardContainer({ eventId, title, isFeatured, dispatch }) {
  const classNames = isFeatured ? 'event-card' : 'event-card featured';

  function onDelete() {
    deleteEvent(eventId)
      .then(() => {
        browserHistory.push('/');
      });
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
