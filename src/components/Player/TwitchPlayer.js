import React, { Component } from 'react';

function hmsToSecondsOnly(str) {
  if (!str) {
    return '';
  }

  var h = str.split('h')
  var m = h[1].split('m')
  var s = m[1].split('s')

  var seconds = parseInt(h[0])*60*60 + parseInt(m[0])*60 + parseInt(s[0])

  return seconds;
}

class TwitchPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vodId: this.props.vodId,
    }
  }

  componentDidMount() {
    const { width, height, vodId, timestamp } = this.props;

    if (window.Twitch) {
      this.twitchPlayer = new window.Twitch.Player(this.refs.twitchPlayer, {
        width: this.props.width,
        height: this.props.height,
        video: this.props.vodId
      });
      this.twitchPlayer.setVolume(1);
      console.log(this.props.timestamp);
      this.twitchPlayer && this.twitchPlayer.setVideo(`v${vodId}`, hmsToSecondsOnly(timestamp));
    }
  }

  componentDidUpdate() {
    if ( this.state.vodId !== this.props.vodId ) {
      this.twitchPlayer && this.twitchPlayer.setVideo(`v${this.props.vodId}`);
      this.setState({
        vodId: this.props.vodId
      })
    } else {
      this.twitchPlayer && (this.props.timestampId && this.twitchPlayer.seek(hmsToSecondsOnly(this.props.timestamp)));
    }

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
