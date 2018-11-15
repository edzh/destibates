import React, { Component } from 'react';
import {vods} from '../../config/api';

import List from './List';
import Form from './Form';
import Refresh from './Refresh';

class Vods extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vods: [],
      loading: true
    }
  }

  componentDidMount() {
    const vodList = [];
    fetch(vods)
      .then(response => response.json())
      .then(vods => {
        Object.keys(vods).forEach(key => {
          vodList.push({
            _id: vods[key]._id,
            vodId: vods[key].vodId,
            date: vods[key].date
          })
        })
      })
      .then(this.setState({ vods: vodList }))
      .then(() => this.setState({ loading: false }))

  }

  render() {
    const { vods, loading } = this.state;

    return(
      <div>
        { !loading && <List vods={vods} loading={loading}/> }
        <Form />
        <Refresh vods={vods}/>
      </div>
    );
  }
}

export default Vods;
