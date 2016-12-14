import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import EventScreen from '../presentation/EventScreen';
import { deleteEvent } from '../../util/dataRequests';

function EventScreenContainer({ event, categories, dispatch }) {
  function onDelete() {
    deleteEvent(event.id)
      .then(() => {
        browserHistory.push('/');
      });
  }

  if (!event) {
    return null; // Event has just been deleted and we're about to reroute if we end up here.
  }

  return (
    <div className="event-screen-container">
      <EventScreen
        event={event}
        categories={categories}
        onDelete={onDelete}
      />
    </div>
  );
}

EventScreenContainer.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isFeatured: PropTypes.bool,
  }),
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
  })),
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  const event = state.events[ownProps.params.eventId];
  const categories = event && event.categories;
  return { event, categories };
}

export default connect(mapStateToProps)(EventScreenContainer);
