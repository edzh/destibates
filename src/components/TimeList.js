import React, { Component } from 'react';
import timestamps_0 from '../data/timestamps_0';

function hmsToSecondsOnly(str) {
  var p = str.split(':'),
    s = 0, m = 1;

  while (p.length > 0) {
    s += m * parseInt(p.pop(), 10);
    m *= 60;
  }

  return s;
}

class TimeList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { handleChangeTime } = this.props;

    return(
      <div className="container font-sans mx-auto">
        <table className="text-left text-grey">
        <tbody>
          <tr>
            <th>Timestamp</th>
            <th>Category</th>
            <th>Topic</th>
          </tr>
          { Object.keys(timestamps_0.timestamps).map((timestamp) =>
            <tr className="hover:text-white cursor-pointer" onClick={() => handleChangeTime(hmsToSecondsOnly(timestamp))}>
              <td>{timestamp}</td>
              <td>{timestamps_0.timestamps[timestamp].category}</td>
              <td>{timestamps_0.timestamps[timestamp].topic}</td>
            </tr>
          )}
        </tbody>
        </table>
      </div>
    )
  }
}

export default TimeList;
