import React, { Component } from 'react';
import { timestamps } from '../../config/api'

import Form from './Form';
import Search from './Search';
import List from './List';

class Timestamps extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vod: this.props.vod,
      timestampsByVod: [],
      query: '',
      loading: true
    }

    this.fetchTimestamps = this.fetchTimestamps.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchTimestamps(this.props.vod);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.vod !== this.props.vod) {
      this.setState({ vod: nextProps.vod }, this.fetchTimestamps(nextProps.vod))
    }
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

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {

    const { timestampsByVod, query } = this.state;

    return(
      <div className="mx-1">
        <input
          type="text"
          className="bg-black text-grey-lightest mb-1 w-full p-2 rounded"
          placeholder="Search"
          value={query}
          name="query"
          onChange={this.handleChange}
        />
        { !this.state.loading && <List vod={this.props.vod} timestampsByVod={timestampsByVod} query={query}/> }
        {/*<Form vod={this.props.vod} vodId={this.props.vodId} fetchTimestamps={this.fetchTimestamps} />*/}

      </div>
    );
  }
}

export default Timestamps;
