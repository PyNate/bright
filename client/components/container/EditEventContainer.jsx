import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import CreateEditScreen from '../presentation/CreateEditScreen';
import { updateEvent } from '../../util/dataRequests';

class EditEventContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      submitted: false
    };
  }

  onEditEvent(event) {
    if (!this.state.submitted) {
      this.setState({ submitted: true });
      event.id = parseInt(this.props.params.eventId, 10);
      updateEvent(event)
        .then(() => {
          browserHistory.push(`/event/${this.props.params.eventId}`);
        });
    }
  }

  render() {
    return (
      <div className="create-edit-container">
        <CreateEditScreen
          event={this.props.event}
          categories={this.props.categories}
          callback={this.onEditEvent.bind(this)}
        />
      </div>
    );
  }
}

EditEventContainer.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isFeatured: PropTypes.bool,
    categories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number,
    })),
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  const event = state.events[ownProps.params.eventId];
  const categories = state.categories;
  return { event, categories };
}

export default connect(mapStateToProps)(EditEventContainer);
