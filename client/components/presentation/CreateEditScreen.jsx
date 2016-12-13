import React, { PropTypes, Component } from 'react';

export default class CreateEditScreen extends Component {
  constructor(props) {
    super(props);
    // handle form validation here
  }

  render() {
    return (
      <form className="create-edit-contents">
        <ul className="create-edit-fields">
          <li className="field create-edit-title">
            <input
              className="create-edit-input-text"
              type="text"
              ref={c => {this.titleInput = c;}}
              placeholder={this.props.title}
            />
          </li>
          <li className="field create-edit-featured">
            <input
              className="create-edit-input-checkbox"
              type="checkbox"
              ref={c => {this.titleInput = c;}}
              placeholder={this.props.title}
            />
            Featured Event
          </li>
          <li className="field create-edit-description">
            <textarea
              className="create-edit-input-textarea"
              ref={c => {this.descriptionInput = c;}}
              placeholder={this.props.description}
            />
          </li>
          <li className="field create-edit-start-date">
            <input
              className="create-edit-input-datetime"
              type="datetime-local"
              ref={c => {this.startDateInput = c;}}
              placeholder={this.props.startDate}
            />
          </li>
          <li className="field create-edit-end-date">
            <input
              className="create-edit-input-datetime"
              type="datetime-local"
              ref={c => {this.endDateInput = c;}}
              placeholder={this.props.endDate}
            />
          </li>
          <li className="button create-edit-submit">
            <input type="submit" />
          </li>
        </ul>
      </form>
    );
  }
}
