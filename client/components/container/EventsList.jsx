import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import EventCardContainer from './EventCardContainer';

function EventsList({ events, dispatch }) {
  const eventComponents = events.map((event, i) => { // eslint-disable-line arrow-body-style
    return (
      <EventCardContainer
        key={i}
        eventId={event.id}
        title={event.title}
        isFeatured={event.isFeatured}
        dispatch={dispatch}
      />
    );
  });

  return (<ul className="events-list">{eventComponents}</ul>);
}

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isFeatured: PropTypes.bool,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { events: state.events };
}

export default connect(mapStateToProps)(EventsList);
