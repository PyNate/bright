import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import EventCardContainer from './EventCardContainer';

function EventsList({ events, dispatch }) {
  const eventComponents = Object.keys(events).map((eventId, i) => {
    return (
      <EventCardContainer
        key={i}
        eventId={events[eventId].id}
        title={events[eventId].title}
        isFeatured={events[eventId].isFeatured}
        dispatch={dispatch}
      />
    );
  });

  return (
    <div className="events-list-container">
      <ul className="events-list">{eventComponents}</ul>
    </div>
  );
}

EventsList.propTypes = {
  events: PropTypes.shape({
    [PropTypes.string]: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isFeatured: PropTypes.bool,
    })
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { events: state.events };
}

export default connect(mapStateToProps)(EventsList);
