import React, { Component } from 'react';

class TwitchPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: this.props.videoId
    }
  }

  componentDidMount() {
    this.twitchPlayer = new window.Twitch.Player(this.refs.twitchPlayer, {
      width: this.props.width,
      height: this.props.height,
      video: this.props.videoId
    })
    this.twitchPlayer.setVolume(1);
  }

  componentDidUpdate() {
    if ( this.state.videoId !== this.props.videoId ) {
      this.twitchPlayer && this.twitchPlayer.setVideo(this.props.videoId);
      this.setState({
        videoId: this.props.videoId
      })
    } else {
      this.twitchPlayer && this.twitchPlayer.seek(this.props.timestamp);
    }

  }

  handleChangeVideo(video) {
    this.twitchPlayer && this.twitchPlayer.setVideo(this.props.videoId);
  }

  render() {
    return(
      <div>
        <div id="twitchPlayer" ref="twitchPlayer"></div>
      </div>
    );
  }
}

export default TwitchPlayer;
