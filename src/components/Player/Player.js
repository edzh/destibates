import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Vods from '../Vods/Vods';
import TimestampList from '../Timestamps/TimestampList';
import TwitchPlayer from './TwitchPlayer';

import { vods, timestamps } from '../../config/api'

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vodId: '335943508',
      timestamp: ''
    }

    // this.getVodId = this.getVodId.bind(this);
    // this.getTimestamp = this.getTimestamp.bind(this);
  }



  componentWillUpdate(nextProps) {
    if (!nextProps.timestamp && this.props.vodId !== nextProps.vodId) {
      nextProps.vodId && fetch(`${vods}/${nextProps.vodId}`)
        .then(response => response.json())
        .then(response => {
          this.setState({ vodId: response.vodId, timestamp: response.timestamp })
        });
    }


    if (nextProps.timestamp !== this.props.timestamp) {
      nextProps.timestamp && fetch(`${timestamps}/${nextProps.timestamp}`)
        .then(response => response.json())
        .then(response => {
          this.setState({ vodId: response.vodId, timestamp: response.timestamp })
        })
    }
  }

  render() {
    return (
      <div className="flex mx-2">
        <div className="w-48">
          <Vods getVodId={this.getVodId} />
        </div>
        <div className="w-full">
          <TwitchPlayer vodId={this.state.vodId} width={"100%"} height={"720"} timestamp={this.state.timestamp}/>
        </div>
        <div className="" style={{width: "24rem"}}>
          <Route path={"/vods/:vod"} render={({ match }) => (
            <TimestampList vod={match.params.vod} />
          )}/>
        </div>
      </div>
    )
  }
}

export default Player;
