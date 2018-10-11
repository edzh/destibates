import React, { Component } from 'react';
import Timestamp from './Timestamp';
import videoIds from '../data/videoIds';

class TimeList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { handleChangeTimestamp, videoId, timestamp } = this.props;

    return(
      <div className="overflow-auto mx-2" style={{height: '720px'}}>
        {videoIds[videoId].timestamps && Object.keys(videoIds[videoId].timestamps).map((timestamp) =>
          <Timestamp handleChangeTimestamp={handleChangeTimestamp} timestamp={timestamp} videoId={videoId} />
        )}
      </div>
    )
  }
}

export default TimeList;
