import React from 'react';

const Previous = ({ part, date, onDatePartClick }) =>
  <div
    className="py-2 text-lg text-grey-lightest border border-t-0 border-l-0 border-r-0 border-grey-dark cursor-pointer"
    onClick={() => onDatePartClick(part)}
    key={0}
  >
    <p className="ml-2">{'\u25c2'} {date}</p>
  </div>

export default Previous;
