import React, { Component } from 'react';
import Timestamp from './Timestamp';
import { timestamps } from '../../config/api'

import Form from './Form';

class TimestampList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vod: this.props.vod,
      timestampByDate: [],
      loading: true
    }

    this.fetchTimestamps = this.fetchTimestamps.bind(this);
  }

  componentDidMount() {
    this.fetchTimestamps(this.props.vod);
  }

  fetchTimestamps(vod) {
    const timestampByDate = [];
    fetch(timestamps)
      .then(response => response.json())
      .then(timestamp => {
        Object.keys(timestamp)
          .filter(key => timestamp[key].vod === vod)
          .forEach(key => timestampByDate.push(timestamp[key]))
        this.setState({ timestampByDate })
      })
      .then(() => this.setState({ loading: false }))
  }

  componentWillUpdate(nextProps) {
    if (nextProps.vod !== this.props.vod) {
      this.setState({ vod: nextProps.vod }, this.fetchTimestamps(nextProps.vod))
    }
  }

  render() {

    const { timestampByDate } = this.state;

    return(
      <div>
        { !this.state.loading && Object.keys(timestampByDate).map(key =>
          <div key={key}>
            <Timestamp topic={timestampByDate[key].topic} category={timestampByDate[key].category} timestampId={timestampByDate[key]._id} vod={this.props.vod} time={timestampByDate[key].timestamp} />

          </div>
        )}
        <Form vod={this.props.vod} />
      </div>
    );
  }
}

export default TimestampList;
