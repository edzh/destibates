import React, { Component } from 'react';
import {vods} from '../../config/api';
import AuthService from '../Auth/AuthService';

const Auth = new AuthService();

const videos = "https://api.twitch.tv/helix/videos?user_id=18074328"

class Refresh extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vodsToAdd: []
    }

    this.getTwitchVods = this.getTwitchVods.bind(this);
    this.postVods = this.postVods.bind(this);
  }

  getTwitchVods() {
    fetch(videos, {
      method: 'get',
      headers: {
        // 'Authorization': 'Bearer xi0b0iptqmx5nhwwyzdbndj528cs3x'
        'Client-ID': '9wytke1zqxbw9f2tp5c36qy754xgry'
      }
    })
      .then(response => response.json())
      .then(vods => {
        const fetched_ids = [];
        const current_ids = []


        Object.keys(this.props.vods).forEach(vod => {
          current_ids.push(this.props.vods[vod].vodId)
        })

        Object.keys(vods.data).forEach(key => {
          fetched_ids.push({
            id: vods.data[key].id,
            date: vods.data[key].created_at
          })
        })

        const vodsToAdd = fetched_ids.filter(vod =>
          vod.id && !current_ids.includes(vod.id)
        )
        console.log(vodsToAdd);
        this.setState({ vodsToAdd }, this.postVods)
      })

  }

  postVods() {
    Object.keys(this.state.vodsToAdd).forEach(key => {
      fetch(`${vods}?access_token=${Auth.getToken()}`, {
        method: 'post',
        body: JSON.stringify({
          vodId: this.state.vodsToAdd[key].id,
          date: this.state.vodsToAdd[key].date,
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
        <p onClick={this.getTwitchVods}>refreshed</p>
      </div>
    );
  }
}

export default Refresh;
