import React, { Component } from 'react';
import { vods } from '../../config/api'
import AuthService from '../Auth/AuthService';
import DateView from './DateView';

const Auth = new AuthService();
const videos = "https://api.twitch.tv/helix/videos?user_id=18074328"

class List extends Component {
  constructor(props) {
    super (props);
  }

  render() {
    const { vods, loading } = this.props;
    return(
      <div>
      { <DateView vods={vods} getVodId={this.props.getVodId}/> }
      </div>
    );
  }
}

export default List
