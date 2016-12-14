import React, { PropTypes, Component } from 'react';

export default class CreateEditScreen extends Component {
  constructor(props) {
    super(props);
  }

  formatAndSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: this.titleInput.value,
      isFeatured: this.featuredInput.checked,
      description: this.descriptionInput.value,
      startDate: this.startDateInput.value,
      endDate: this.endDateInput.value,
      categories: [
        {
          name: this.categoryInput.value,
        }
      ],
    }
    this.props.callback(event);
  }

  render() {
    const currentDate = new Date().toISOString().slice(0, -1); // HTML5 datetime does not accept the ISO zone designator, so we remove it here
    return (
      <form className="create-edit-contents" onSubmit={this.formatAndSubmit}>
        <ul className="create-edit-fields">
          <li className="field create-edit-title">
            Title
            <input
              className="create-edit-input-text"
              type="text"
              ref={c => {this.titleInput = c;}}
              placeholder={"New Event"}
              defaultValue={this.props.title}
            />
          </li>
          <li className="field create-edit-featured">
            <input
              className="create-edit-input-checkbox"
              type="checkbox"
              ref={c => {this.featuredInput = c;}}
            />
            Featured Event
          </li>
          <li className="field create-edit-description">
            Description
            <textarea
              className="create-edit-input-textarea"
              ref={c => {this.descriptionInput = c;}}
              placeholder={"An example event"}
              defaultValue={this.props.description}
            />
          </li>
          <li className="field create-edit-start-date">
            Start Time
            <input
              className="create-edit-input-datetime"
              type="datetime-local"
              ref={c => {this.startDateInput = c;}}
              defaultValue={this.props.startDate || currentDate}
            />
          </li>
          <li className="field create-edit-end-date">
            End Time
            <input
              className="create-edit-input-datetime"
              type="datetime-local"
              ref={c => {this.endDateInput = c;}}
              defaultValue={this.props.endDate || currentDate}
            />
          </li>
          <li className="field create-edit-category">
            Category
            <input
              className="create-edit-input-text"
              type="text"
              ref={c => {this.categoryInput = c;}}
              placeholder={"Example"}
              defaultValue={this.props.category}
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

CreateEditScreen.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  isFeatured: PropTypes.bool,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  category: PropTypes.string,
  callback: PropTypes.func.isRequired,
}
