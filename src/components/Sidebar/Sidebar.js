import React from 'react';
import PropTypes from 'prop-types';

import DateView from './Date/DateView';
import CategoryList from './Category/CategoryList';
import Refresh from '../Refresh';

const filters = ['Date', 'Category'];

class Sidebar extends React.Component {
  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();

  }

  render() {
    const {
      onViewClick,
      onDatePartClick,
      onDateClick,
      onCategoryClick,
      fetchTimestamps,
      timestamps,
      sidebar,
      categories,
      currentCategory,
      vods,
      isFetchingVods,
      fetchVods
    } = this.props

    if (sidebar.view === 'Date') {
      return(
        <div>
          <p
            className="bg-grey-darker p-2 m-1 text-grey text-lg rounded cursor-pointer"
            onClick={() => onViewClick('')}
          >
            {sidebar.view}
          </p>
          <DateView
            date={sidebar.date}
            onDateClick={onDateClick}
            fetchVods={fetchVods}
            isFetchingVods={isFetchingVods}
            onDatePartClick={onDatePartClick}
            vods={vods}
          />
        </div>
      );
    }
    if (sidebar.view === 'Category') {
      return(
        <div>
          <p
            className="bg-grey-darker p-2 m-1 text-grey text-lg rounded cursor-pointer"
            onClick={() => onViewClick('')}
          >
            {sidebar.view}
          </p>
          <CategoryList
            fetchTimestamps={fetchTimestamps}
            timestamps={timestamps}
            onCategoryClick={onCategoryClick}
            categories={categories}
            currentCategory={currentCategory}
          />
        </div>
      );
    }
    return(
      <div>
        {filters.map(filter =>
          <p
            key={filter}
            className="bg-grey-darker p-2 text-grey text-lg m-1 rounded cursor-pointer"
            onClick={() => onViewClick(filter)}
          >
            {filter}
          </p>
        )}
        {<Refresh vods={vods}/>}
      </div>
    );

  }
}




Sidebar.propTypes = {
  onViewClick: PropTypes.func.isRequired
}

export default Sidebar;
