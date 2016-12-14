import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import CreateEditScreen from '../presentation/CreateEditScreen';
import { createEvent } from '../../util/dataRequests';

class CreateEventContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      submitted: false
    };
  }

  onCreateEvent(event) {
    if (!this.state.submitted) {
      this.setState({ submitted: true });
      createEvent(event)
        .then((id) => {
          browserHistory.push(`/event/${id}`);
        });
    }
  }

  render() {
    return (
      <div className="create-edit-container">
        <CreateEditScreen
          categories={this.props.categories}
          callback={this.onCreateEvent.bind(this)}
        />
      </div>
    );
  }
}

CreateEventContainer.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const categories = state.categories;
  return { categories };
}

export default connect(mapStateToProps)(CreateEventContainer);
