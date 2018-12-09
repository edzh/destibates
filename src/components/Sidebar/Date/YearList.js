import React from 'react';
import PropTypes from 'prop-types';

const years = [ '2018' ]

const YearList = ({ onDateClick, onDatePartClick }) => {
  return(
    <div>
      <ul className="list-reset">
      { years.map(year =>
        <li
          className="py-2 text-grey-light border border-grey-darker border-t-0 border-l-0 border-r-0"
          key={year}
          onClick={() => {
            onDateClick('year', year);
            onDatePartClick('year');
          }}
        ><p className="ml-4">{year}</p>
        </li>
      )}
      </ul>
    </div>
  );
}

YearList.propTypes = {

}

export default YearList;
