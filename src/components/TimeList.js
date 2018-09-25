import React, { Component } from 'react';
import timestamps_1 from '../data/timestamps_1';

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

    Object.keys(timestamps_1.timestamps).forEach(key => console.log(timestamps_1.timestamps[key]))

    return(
      <div>
        <table>
        <tbody>
          <tr>
            <th classList="red">Timestamp</th>
            <th classList="red">Category</th>
            <th classList="red">Topic</th>
          </tr>
          { Object.keys(timestamps_1.timestamps).map((timestamp) =>
            <tr>
              <td classList="red-darkest" onClick={() => handleChangeTime(hmsToSecondsOnly(timestamp))}>{timestamp}</td>
              <td>{timestamps_1.timestamps[timestamp].category}</td>
              <td>{timestamps_1.timestamps[timestamp].topic}</td>
            </tr>
          )}
        </tbody>
        </table>
      </div>
    )
  }
}

export default TimeList;
