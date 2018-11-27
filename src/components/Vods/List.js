import React, { Component } from 'react';
import moment from 'moment';

import { vods } from '../../config/api'
import AuthService from '../Auth/AuthService';
import DateView from './Date/DateView';
import CategoryView from './Category/CategoryView';

const Auth = new AuthService();
const videos = "https://api.twitch.tv/helix/videos?user_id=18074328"

class List extends Component {
  constructor(props) {
    super (props);

    this.state = {
      type: "date",
    }
  }

  handleClick(type) {
    this.setState({ type })
    this.props.setType(type)
  }

  render() {
    const { vods, loading } = this.props;
    const { type } = this.state;

    return(
      <div>
        <div className="bg-black flex w-48">
          <p className="text-grey-light ml-1 p-2" onClick={() => this.handleClick("date")}>Date</p>
          <p className="text-grey-light p-2 ml-auto mr-1" onClick={() => this.handleClick("category")}>Category</p>
        </div>
        <div className="overflow-auto" style={{height: "720px"}}>
          { type === "date" && <DateView vods={vods} /> }
          { type === "category" && <CategoryView category={this.props.category} setCategory={this.props.setCategory} /> }

        </div>

      </div>
    );
  }
}

export default List
