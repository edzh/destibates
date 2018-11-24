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
          vodList.push(vods[key])
        })
      })
      .then(this.setState({ vods: vodList }))
      .then(() => this.setState({ loading: false }))

  }

  render() {
    const { vods, loading } = this.state;

    return(
      <div>
        { !loading && <List vods={vods} loading={loading} /> }
        <Refresh vods={vods}/>
      </div>
    );
  }
}

export default Vods;
