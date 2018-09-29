import React, { Component } from 'react';
import TimeList from './TimeList'
import TwitchPlayer from './TwitchPlayer'
import VideoList from './VideoList';

function hmsToSecondsOnly(str) {
  var p = str.split(':'),
    s = 0, m = 1;

  while (p.length > 0) {
    s += m * parseInt(p.pop(), 10);
    m *= 60;
  }

  return s;
}

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: this.props.match.params.videoId,
      timestamp: this.props.match.params.timestamp,
    }
  }

  render() {
    const { videoId, timestamp } = this.props.match.params;
    return (
      <div className="flex mx-2">
        <div className="w-1/6">
          <VideoList />
        </div>
        <div className="w-2/3">
          <TwitchPlayer timestamp={timestamp} width={"100%"} height={"720"} videoId={videoId} />
        </div>
        <div className="w-1/6">
          <TimeList timestamp={timestamp} videoId={videoId} />
        </div>
      </div>
    )
  }
}

export default Player;
