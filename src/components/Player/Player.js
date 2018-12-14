import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Vods from '../Vods/Vods';
import Timestamps from '../Timestamps/Timestamps';
import TwitchPlayer from './TwitchPlayer';

import { vods, timestamps } from '../../config/api'

class Player extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

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

export default Player;
