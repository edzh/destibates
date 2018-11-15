import React, { Component } from 'react';
import { timestamps } from '../../config/api'

import Form from './Form';

class TimestampList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { vod } = this.props
    fetch(timestamps)
      .then(response => response.json())
      .then(timestamp => {
        const times = Object.keys(timestamp).filter(key => timestamp[key].vod === vod).forEach(key => console.log(key))
        this.setState({times: times})
      })

    // console.log(this.state)
  }

  render() {
    return(
      <div>
        <Form vod={this.props.vod} />
      </div>
    );
  }
}

export default TimestampList;
