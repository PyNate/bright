import React, { PropTypes } from 'react';

export default function CategoryCard({ category, allowEdit, onDelete }) {
  let removeButton = null;
  if (allowEdit && onDelete) {
    removeButton = (
      <button
        className="category-remove"
        onClick={onDelete}
      >
        <span className="cateogory-remove-content">X</span>
      </button>
    );
  }

  return (
    <li className="event-screen-category">
      <span className="category-text">{category.name}</span>
      {removeButton}
    </li>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
  }).isRequired,
  allowEdit: PropTypes.bool,
  onDelete: PropTypes.func,
};
