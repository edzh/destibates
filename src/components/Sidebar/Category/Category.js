import React from 'react';
import TimestampList from '../../../containers/TimestampListContainer';


const Category = ({onCategoryClick, currentCategory, categories, category, fetchTimestamps, timestamps}) =>
  <li
    className="border border-grey-darker border-t-0 border-l-0 border-r-0 py-2"
    key={category}
  >
    <div onClick={() => {
      fetchTimestamps('category', category);
      category === currentCategory
        ? onCategoryClick('n/a')
        : onCategoryClick(category);
      }}
      className="text-grey-light flex">
      <p className="ml-2">
        {category}
      </p>
    </div>
    {category === currentCategory && timestamps && <TimestampList />}
  </li>

export default Category;
