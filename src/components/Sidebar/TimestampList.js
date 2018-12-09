import React from 'react';
import Timestamp from './Timestamp';


class TimestampList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { timestamps, onTimestampClick } = this.props;

    return (
      <ul className="list-reset">
        { timestamps.map((key, index) =>
          <Timestamp key={index} vod={key.vodId} topic={key.topic} category={key.category} timestamp={key.timestamp} onTimestampClick={onTimestampClick} />
        )}
      </ul>
    );
  }
}

export default TimestampList;
