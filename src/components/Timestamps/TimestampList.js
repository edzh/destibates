import React, { Component } from 'react';
import Timestamp from './Timestamp';
import { timestamps } from '../../config/api'

import Form from './Form';
import Search from './Search';

class TimestampList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vod: this.props.vod,
      timestampsByVod: [],
      loading: true,
      search: false
    }

    this.fetchTimestamps = this.fetchTimestamps.bind(this);
  }

  componentDidMount() {
    this.fetchTimestamps(this.props.vod);
  }

  fetchTimestamps(vod) {
    const timestampsByVod = [];
    fetch(timestamps)
      .then(response => response.json())
      .then(timestamp => {
        Object.keys(timestamp)
          .filter(key => timestamp[key].vod === vod)
          .forEach(key => timestampsByVod.push(timestamp[key]))
        this.setState({ timestampsByVod })
      })
      .then(() => this.setState({ loading: false }))
  }

  componentWillUpdate(nextProps) {
    if (nextProps.vod !== this.props.vod) {
      this.setState({ vod: nextProps.vod }, this.fetchTimestamps(nextProps.vod))
    }
  }

  render() {

    const { timestampsByVod } = this.state;
    console.log(timestampsByVod);
    return(
      <div>
        <Search timestampsByVod={timestampsByVod} vod={this.props.vod} />
        { !this.state.loading && Object.keys(timestampsByVod).map(key =>
          <div key={key}>
            <Timestamp topic={timestampsByVod[key].topic} category={timestampsByVod[key].category} timestampId={timestampsByVod[key]._id} vod={this.props.vod} time={timestampsByVod[key].timestamp} />

          </div>
        )}
        <Form vod={this.props.vod} vodId={this.props.vodId} fetchTimestamps={this.fetchTimestamps} />
      </div>
    );
  }
}

export default TimestampList;
