import React, { Component } from 'react';
import {vods} from '../../config/api'
import DateView from './DateView';

const videos = "https://api.twitch.tv/helix/videos?user_id=18074328"

class List extends Component {
  constructor(props) {
    super (props);

    this.state = {
      vods: {},
      loading: true
    }
  }

  componentDidMount() {
    fetch(vods)
      .then(response => response.json())
      .then(vods => {
        console.log(vods);
        this.setState({ vods, loading: false })
      })

    fetch(videos, {
      method: 'get',
      headers: {
        'Authorization': 'Bearer xi0b0iptqmx5nhwwyzdbndj528cs3x'
      }
    })
      .then(response => response.json())
      .then(vods => {
        console.log(vods)
      })
  }

  render() {
    const { vods, loading } = this.state;

    return(
      <div>
      { !loading && <DateView vods={vods} /> }
      </div>
    );
  }
}

export default List
