import React, { Component } from 'react';
import { vods } from '../config/api';
// import { TwitchAPIKey } from '../config/index.js';
import AuthService from './Auth/AuthService';

const Auth = new AuthService();

const videos = "https://api.twitch.tv/helix/videos?user_id=18074328&first=100"

class Refresh extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vodsToAdd: [],
      current_ids: []
    }

    this.getTwitchVods = this.getTwitchVods.bind(this);
    this.getCurrentVods = this.getCurrentVods.bind(this);
    this.postVods = this.postVods.bind(this);
  }

  componentDidMount() {
    this.getTwitchVods();
    this.getCurrentVods();
  }

  getTwitchVods() {
    fetch(videos, {
      method: 'get',
      headers: {
        // 'Client-ID': TwitchAPIKey
        'Client-ID': process.env.Twitch_API_KEY
      }
    })
      .then(response => response.json())
      .then(vods => {
        const fetched_ids = [];

        Object.keys(vods.data).forEach(key => {
          fetched_ids.push({
            id: vods.data[key].id,
            date: vods.data[key].created_at
          })
        })

        this.setState({ fetched_ids })
      })
      .catch((err) => console.log(err));
  }

  getCurrentVods() {
    fetch(vods)
      .then(response => response.json())
      .then(data => {
        const current_ids = [];
        Object.keys(data).forEach(key => {
          current_ids.push(data[key].vodId)
        })
        this.setState({ current_ids })
      })
  }

  postVods() {
    const { current_ids, fetched_ids } = this.state;

    const vodsToAdd = fetched_ids.filter(vod =>
      vod.id && !current_ids.includes(vod.id)
    )

    Object.keys(vodsToAdd).forEach(key => {
      fetch(`${vods}?access_token=${Auth.getToken()}`, {
        method: 'post',
        body: JSON.stringify({
          vodId: vodsToAdd[key].id,
          date: vodsToAdd[key].date,
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).catch((err) => console.log(err));

    })
  }

  render() {
    return(
      <div>
        <p onClick={this.postVods}>refreshed</p>
      </div>
    );
  }
}

export default Refresh;
