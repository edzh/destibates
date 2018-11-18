import React, { Component } from 'react';
import moment from 'moment';

import { vods } from '../../config/api'
import AuthService from '../Auth/AuthService';
import DateView from './DateView';

const Auth = new AuthService();
const videos = "https://api.twitch.tv/helix/videos?user_id=18074328"

class List extends Component {
  constructor(props) {
    super (props);

    this.state = {
      months: []
    }
  }

  // componentDidMount() {
  //   const { vods } = this.props;

  //   const months = [];

  //   Object.keys(vods).forEach(key => {
  //     const month = moment(vods[key].date).format('MMMM');
  //     if (months)
  //     months.push(month)
  //   })

  //   console.log(months)
  // }

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
