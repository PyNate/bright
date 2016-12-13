import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import CreateEditScreen from '../presentation/CreateEditScreen';
import { createEvent } from '../../store/reduxActions';

class CreateEventContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      submitted: false
    };
  }

  createEvent(event) {
    if (!this.state.submitted) {
      this.props.dispatch(createEvent(event));
      // set route
    } else {
      this.setState({ submitted: true });
    }
  }

  render() {
    return (
      <div className="create-edit-container">
        <CreateEditScreen
          categories={this.props.categories}
          callback={this.createEvent.bind(this)}
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
