import React, { Component } from 'react';

import { timestamps } from './config/api'


class Playground extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // fetch(timestamps)
    //   .then(response => response.find({ category: "Videos"}))
  }

  render() {
    return(
      <div></div>
    );
  }
}

export default Playground;
