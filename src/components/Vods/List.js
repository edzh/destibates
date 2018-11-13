import React, { Component } from 'react';
import { vods } from '../../config/api'
import DateView from './DateView';

const videos = "https://api.twitch.tv/helix/videos?user_id=18074328"

class List extends Component {
  constructor(props) {
    super (props);

    this.state = {
      fetched_vods: [],
      vodsToAdd: [],
      vods: [],
      loading: true
    }

    this.getCurrentVods = this.getCurrentVods.bind(this);
    this.getTwitchVods = this.getTwitchVods.bind(this);
  }

  componentDidMount() {
    this.getCurrentVods();
    this.getTwitchVods();
  }

  getCurrentVods() {
    fetch(vods)
      .then(response => response.json())
      .then(vods => {
        console.log(vods);
        this.setState({ 
          vods, 
          loading: false,
        })
      })    
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
        Object.keys(vods.data).forEach(key => {
          this.setState(prevState => ({ 
            fetched_vods: [...prevState.fetched_vods, {
              id: vods.data[key].id,
              date: vods.data[key].created_at
            }],
          }))
        })
      })
  }

  componentWillUpdate(nextProps, nextState) {

    Object.keys(nextState.fetched_vods).forEach(key => {
      console.log(nextState.fetched_vods[key].id)
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
