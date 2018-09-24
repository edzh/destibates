import React, { Component } from 'react';

class TwitchPlayer extends Component {
  constructor() {
    super();

    this.state = {
      timestamp: "",
    }

    // this.changeTimestamp = this.changeTimestamp.bind(this);
  }

  componentDidMount() {
    this.twitchPlayer = new window.Twitch.Player(this.refs.twitchPlayer, {
      width: this.props.width,
      height: this.props.height,
      video: this.props.video
    })
    this.twitchPlayer.setVolume(1);
  }

  render() {
    this.twitchPlayer && this.twitchPlayer.seek(this.props.timestamp);

    return(
      <div>
        <div id="twitchPlayer" ref="twitchPlayer"></div>
      </div>
    );
  }
}

export default TwitchPlayer;
