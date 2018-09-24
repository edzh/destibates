import React, { Component } from 'react';
import { compose } from 'recompose';
import TimeList from './TimeList'
import TwitchPlayer from './TwitchPlayer'


class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video: "",
      timestamp: "",
    }

    this.handleChangeTime = this.handleChangeTime.bind(this);
  }

  handleChangeTime(timestamp) {
    this.setState({ timestamp });
  }

  render() {
    const { timestamp } = this.state;

    return (
      <div>
        <TwitchPlayer timestamp={timestamp} width={1280} height={720} video="311132964"/>
        <TimeList handleChangeTime={this.handleChangeTime} />
      </div>
    )
  }
}

export default Player;
