import React, { PropTypes } from 'react';
import CategoryCard from '../presentation/CategoryCard';

export default function CategoriesList({ categories, allowEdit, onDelete }) {
  if (!categories || categories.length === 0) {
    return null;
  }

  const categoryElements = categories.map((category, i) => { // eslint-disable-line arrow-body-style
    return (
      <CategoryCard
        key={i}
        category={category}
        allowEdit={allowEdit}
        onDelete={onDelete}
      />
    );
  });

  return (<ul className="event-screen-categories">{categoryElements}</ul>);
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
  })),
  allowEdit: PropTypes.bool,
  onDelete: PropTypes.func,
};
