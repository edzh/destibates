import React, { Component } from 'react';
import {vods} from '../../config/api';

import List from './List';
import Form from './Form';
import RefreshVods from './RefreshVods';

class Vods extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <List />
        <Form />
        <RefreshVods />
      </div>
    );
  }
}

export default Vods;
