import React, { Component } from 'react';

const videos = "https://api.twitch.tv/helix/videos?user_id=18074328"

class RefreshVods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetched_vods: [],
      current_vods: [],
    }

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
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
    return(
      <div>
        <p onClick={this.handleClick}>refreshed</p>
      </div>
    );
  }
}

export default RefreshVods;
