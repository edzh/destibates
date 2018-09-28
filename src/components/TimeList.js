import React, { Component } from 'react';
import videoIds from '../data/videoIds';

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
    const { handleChangeTimestamp, videoId } = this.props;

    return(
      <div className="container font-sans mx-auto">
        <table className="text-left text-grey">
        <tbody>
          <tr>
            <th>Timestamp</th>
            <th>Category</th>
            <th>Topic</th>
          </tr>
          { Object.keys(videoIds[videoId].timestamps).map((timestamp) =>
            <tr key={timestamp} className="hover:text-white cursor-pointer" onClick={() => handleChangeTimestamp(hmsToSecondsOnly(timestamp))}>
              <td>{timestamp}</td>
              <td>{videoIds[videoId].timestamps[timestamp].category}</td>
              <td>{videoIds[videoId].timestamps[timestamp].topic}</td>
            </tr>
          )}
        </tbody>
        </table>
      </div>
    )
  }
}

export default TimeList;
