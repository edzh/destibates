import React, { Component } from 'react';
import Timestamp from './Timestamp';
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
      <div className="overflow-auto px-4 mx-auto" style={{height: "720px"}}>
        <Timestamp handleChangeTimestamp={handleChangeTimestamp} videoId={videoId} />
      </div>
    )
  }
}

export default TimeList;
