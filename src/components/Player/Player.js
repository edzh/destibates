import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Vods from '../Vods/Vods';
import Timestamps from '../Timestamps/Timestamps';
import TwitchPlayer from './TwitchPlayer';

import { vods, timestamps } from '../../config/api'

class Player extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   vodId: '',
    //   vodView: '',
    //   type: "date",
    //   category: '',
    // }

    // this.setType = this.setType.bind(this);
    // this.setCategory = this.setCategory.bind(this);
  }

  // componentDidMount() {
  //   this.props.timestamp && fetch(`${timestamps}/${this.props.timestamp}`)
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState({ vodId: response.vodId, vodView: response.vodId, timestamp: response.timestamp })
  //     })
  // }

  // componentWillUpdate(nextProps) {
  //   if (!nextProps.timestamp && this.props.vodId !== nextProps.vodId) {
  //     nextProps.vodId && fetch(`${vods}/${nextProps.vodId}`)
  //       .then(response => response.json())
  //       .then(response => {
  //         this.setState({ vodView: response.vodId, timestamp: null })
  //       });
  //   }


  //   if (nextProps.timestamp !== this.props.timestamp) {
  //     nextProps.timestamp && fetch(`${timestamps}/${nextProps.timestamp}`)
  //       .then(response => response.json())
  //       .then(response => {
  //         this.setState({ vodId: response.vodId, timestamp: response.timestamp })
  //       })
  //   }
  // }

  // setType(type) {
  //   this.setState({ type })
  // }

  // setCategory(category) {
  //   this.setState({ category })
  // }

  render() {
    // const { vodId, timestamp, vodView } = this.state
    const { vod, timestamp } = this.props;

    return (
      <div className="flex" >
        <div className="w-full h-full">
          {(this.props.timestamp ? timestamp : vod) && <TwitchPlayer
              vodId={vod}
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
