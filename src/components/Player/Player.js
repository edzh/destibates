import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TwitchPlayer from './TwitchPlayer';

class Player extends Component {
  render() {
    const { vodId, timestamp } = this.props;

    return (
      <div className="flex" >
        <div className="w-full h-full">
          {(this.props.timestamp ? timestamp : vodId) && <TwitchPlayer
              vodId={vodId}
              width={"100%"}
              height={"960px"}
              timestamp={timestamp}
              timestampId={this.props.timestamp}
            />
          }
        </div>
      </div>
    )
  }
}

Player.propTypes = {
  vodId: PropTypes.string,
  timestamp: PropTypes.string
}

export default Player;
