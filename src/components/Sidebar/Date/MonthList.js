import React from 'react';
import PropTypes from 'prop-types';

const months = [
  'December',
  'November',
  'October',
  'September',
  'August',
  'July',
  'June',
  'May',
  'April',
  'March',
  'February',
  'January'
]

const MonthList = ({ onDateClick, onDatePartClick, fetchVods }) => {
  return(
    <div>
      <ul className="list-reset bg-black">
      { months.map(month =>
        <li
          className="py-2 text-grey-light border border-grey-darker border-t-0 border-l-0 border-r-0"
          key={month}
          onClick={() => {
            fetchVods('month', 12 - parseInt(months.indexOf(month)));
            onDateClick('month', month);
            onDatePartClick('month');

          }}
        ><p className="ml-4">{month}</p>
        </li>
      )}
      </ul>
    </div>
  );
}

MonthList.propTypes = {

}

export default MonthList;
