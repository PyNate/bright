/* eslint-disable no-script-url */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function EventControls({ allowEdit, onDelete, eventId }) {
  let detailsOrEditLink;
  if (allowEdit) {
    detailsOrEditLink = <Link className="control-edit" to={`/event/${eventId}/edit`}>Edit</Link>;
  } else {
    detailsOrEditLink = <Link className="control-details" to={`/event/${eventId}`}>Details</Link>;
  }

  return (
    <div className="event-controls">
      {detailsOrEditLink}
      <a className="control-delete" href="javascript:void(0)" onClick={onDelete}>Delete</a>
    </div>
  );
}

EventControls.propTypes = {
  allowEdit: PropTypes.bool,
  onDelete: PropTypes.func.isRequired,
  eventId: PropTypes.number.isRequired,
};
