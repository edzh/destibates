import React from 'react';
import PropTypes from 'prop-types';

import DateView from './Date/DateView';
import CategoryList from './Category/CategoryList';
import Refresh from '../Vods/Refresh';

const filters = ['date', 'category'];

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    const {
      onViewClick,
      onDateClick,
      onDatePartClick,
      onCategoryClick,
      fetchTimestamps,
      timestamps,
      fetchVods,
      sidebar,
      categories,
      currentCategory,
      vods,
      isFetchingVods
    } = this.props

    if (sidebar.view === 'date') {
      return(
        <div>
          <p
            className="bg-grey-darker p-2 mx-auto text-grey"
            onClick={() => onViewClick('')}
          >
            {sidebar.view}
          </p>
          <DateView
            date={sidebar.date}
            fetchVods={fetchVods}
            isFetchingVods={isFetchingVods}
            onDatePartClick={onDatePartClick}
            onDateClick={onDateClick}
            vods={vods}
          />
        </div>
      );
    }
    if (sidebar.view === 'category') {
      return(
        <div>
          <p
            className="bg-grey-darker p-2 text-grey"
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
            className="bg-grey-darker p-2 text-grey"
            onClick={() => onViewClick(filter)}
          >
            {filter}
          </p>
        )}
        <Refresh vods={vods}/>
      </div>
    );

  }
}




Sidebar.propTypes = {
  onViewClick: PropTypes.func.isRequired
}

export default Sidebar;
