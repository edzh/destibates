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
      <div className="flex">
        <div className="w-3/4 ml-4">
          <TwitchPlayer timestamp={timestamp} width={"100%"} height={"720"} videoId={this.props.match.params.videoId} />
        </div>
        <div className="w-1/4">
          <TimeList videoId={this.props.match.params.videoId} handleChangeTimestamp={this.handleChangeTimestamp} />
        </div>
      </div>
    )
  }
}

export default Player;
