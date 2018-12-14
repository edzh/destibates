import React from 'react';
import PropTypes from 'prop-types';

import Category from './Category';

const CategoryList = ({ onCategoryClick, currentCategory, categories, fetchTimestamps, timestamps }) => {
  return(
    <ul className="list-reset bg-black">
    { categories.items.map((category, index) =>
      <Category
        key={index}
        onCategoryClick={onCategoryClick}
        categories={categories}
        fetchTimestamps={fetchTimestamps}
        timestamps={timestamps}
        category={category}
        currentCategory={currentCategory}
      />
    )}
    </ul>
  );
}

CategoryList.propTypes = {

}

export default CategoryList;
