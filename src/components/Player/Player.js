import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TwitchPlayer from './TwitchPlayer';

import { timestamps } from '../../config/api';

class Player extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      err: ''
    }
  }

  componentDidMount() {
    const { timestampId, setTimestamp } = this.props;

    if (timestampId) {
      this.setState({loading: true})
      fetch(`${timestamps}/?_id=${timestampId}`)
        .then(response => response.json())
        .then(timestamp => {
          setTimestamp(timestamp[0].vodId, timestamp[0].timestamp)
          console.log(timestamp[0])
        })
        .then(() => this.setState({loading: false}))
        .catch(err => {
          this.setState({loading: false, err})
        })
    }
  }

  render() {
    const { vodId, timestamp } = this.props;

    return (
      <div className="w-full h-full flex">
        {!this.state.loading && (timestamp ? timestamp : vodId) && <TwitchPlayer
            vodId={vodId}
            width={"100%"}
            height={"768px"}
            timestamp={timestamp}
            timestampId={this.props.timestamp}
          />
        }
      </div>
    )
  }
}

Player.propTypes = {
  vodId: PropTypes.string,
  timestamp: PropTypes.string
}

export default Player;
