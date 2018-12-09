import React from 'react';
import PropTypes from 'prop-types';

const CategoryList = ({ onCategoryClick, categories }) => {
  return(
    <div>
      <ul>
      { categories.items.map(category =>
        <li
          className="text-grey-lightest"
          onClick={() => onCategoryClick(category)}
          key={category}
        >{category}</li>
      )}
      </ul>
    </div>
  );
}

CategoryList.propTypes = {

}

export default CategoryList;
