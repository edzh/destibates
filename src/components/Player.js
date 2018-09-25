import React, { Component } from 'react';
import TimeList from './TimeList'
import TwitchPlayer from './TwitchPlayer'
import timestamps_1 from '../data/timestamps_1';


class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video: "311132964",
      timestamp: "",
    }

    this.handleChangeTime = this.handleChangeTime.bind(this);
  }

  handleChangeTime(timestamp) {
    this.setState({ timestamp });
  }

  handleChangeVideo(video) {
    this.setState({ video })
  }

  render() {
    const { timestamp, video } = this.state;

    return (
      <div>
        <TwitchPlayer timestamp={timestamp} width={1280} height={720} video={video} />
        <TimeList handleChangeTime={this.handleChangeTime} />
      </div>
    )
  }
}

export default Player;
