import React, { Component } from 'react';

function hmsToSecondsOnly(str) {
  if (!str) {
    return '';
  }

  var p = str.split(':'),
    s = 0, m = 1;

  while (p.length > 0) {
    s += m * parseInt(p.pop(), 10);
    m *= 60;
  }

  return s;
}

class TwitchPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vodId: this.props.vodId,
    }
  }

  componentDidMount() {
    const { width, height, vodId } = this.props;

    if (window.Twitch) {
      this.twitchPlayer = new window.Twitch.Player(this.refs.twitchPlayer, {
        width: this.props.width,
        height: this.props.height,
        video: this.props.vodId
      });
      this.twitchPlayer.setVolume(1);
      // this.twitchPlayer.setVideo(`v${this.props.vodId}`, hmsToSecondsOnly(this.props.timestamp))
    }
  }

  componentDidUpdate() {
    if ( this.state.vodId !== this.props.vodId ) {
      this.twitchPlayer && this.twitchPlayer.setVideo(`v${this.props.vodId}`);
      this.setState({
        vodId: this.props.vodId
      })
    } else {
      this.twitchPlayer && this.twitchPlayer.seek(hmsToSecondsOnly(this.props.timestamp));
    }

  }

  handleChangeVideo(video) {
    this.twitchPlayer && this.twitchPlayer.setVideo(this.props.vodId);
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
