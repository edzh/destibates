import React from 'react';
import Timestamp from '../../containers/TimestampContainer';


class TimestampList extends React.Component {
  render() {
    const { timestamps, query } = this.props;

    return (
      <ul className="list-reset">
        { timestamps.map((timestamp, index) =>
          <Timestamp key={index} timestamp={timestamp} query={query} />
        )}
      </ul>
    );
  }
}

export default TimestampList;
