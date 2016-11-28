import React, { PropTypes, Component } from 'react';

class CreateEditScreen extends Component {
  constructor(props) {
    super(props);
    // handle form validation here
  }

  render() {
    <form className="create-edit-contents">
      <div className="create-edit-title">
        <input
          className="create-edit-input-text"
          type="text"
          ref={(c) => {this.titleInput = c;}}
          placeholder={this.props.title}
        />
      </div>
    </form>
  }
}
