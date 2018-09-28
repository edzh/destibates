import React, { Component } from 'react';
import TimeList from './TimeList'
import TwitchPlayer from './TwitchPlayer'

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: this.props.match.params.videoId,
      timestamp: "0",
    }

    this.handleChangeTimestamp = this.handleChangeTimestamp.bind(this);
  }

  handleChangeTimestamp(timestamp) {
    this.setState({ timestamp });
  }

  render() {
    const { timestamp } = this.state;
    return (
      <div>
        <TwitchPlayer timestamp={timestamp} width={1280} height={720} videoId={this.props.match.params.videoId} />
        <TimeList videoId={this.props.match.params.videoId} handleChangeTimestamp={this.handleChangeTimestamp} />
      </div>
    )
  }
}

export default Player;
