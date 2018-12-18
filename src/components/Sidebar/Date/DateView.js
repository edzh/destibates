import React from 'react';
import PropTypes from 'prop-types';

import YearList from './YearList';
import MonthList from './MonthList';
import DayList from './DayList';
import Previous from '../Previous';

const DateView = (props) => {
  if (props.date.currentPart === 'year') {
    return [
      <Previous
        key={0}
        onDatePartClick={props.onDatePartClick}
        part={''}
        date={props.date.year}
      />,
      <MonthList key={1} {...props} />
    ]
  }

  if (!props.isFetchingVods) {
    if (props.date.currentPart === 'month' && props.vods.length !== 0) {
      return [
        <Previous
          key={0}
          onDatePartClick={props.onDatePartClick}
          part={'year'}
          date={props.date.month}
        />,
        <DayList key={1} {...props} />
      ]
    }
  } else {
    return <p className="text-grey-lightest">loading...</p>
  }

  return(
    <YearList {...props} />
  );
}

DateView.propTypes = {
  date: PropTypes.string.isRequired,
  isFetchingVods: PropTypes.bool,
  onDatePartClick: PropTypes.func.isRequired,
  vods: PropTypes.array
}

export default DateView;
