import React from 'react';
import Timestamp from './Timestamp';


class TimestampList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { vod, timestamps, timestamp, onTimestampClick } = this.props;

    return (
      <ul className="list-reset">
        { timestamps.map((key, index) =>
          <Timestamp key={index} currentVod={vod} vod={key.vodId} topic={key.topic} category={key.category} currentTimestamp={timestamp} timestamp={key.timestamp} onTimestampClick={onTimestampClick} />
        )}
      </ul>
    );
  }
}

export default TimestampList;
