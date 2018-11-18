import React, { Component } from 'react';
import { timestamps } from '../../config/api';
import { vods, addTimestamp } from '../../config/api';
import AuthService from '../Auth/AuthService';

const Auth = new AuthService();

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timestamp: '',
      topic: '',
      category: '',
      vodId: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(`${vods}/${this.props.vod}`)
      .then(response => response.json())
      .then(vod => this.setState({vodId: vod.vodId}))
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    const { timestamp, topic, category } = this.state;
    const { vodId, vod } = this.props;

    addTimestamp(timestamp, topic, category, vodId, vod)
      .then(() => this.props.fetchTimestamps(vod));
  }

  render() {
    const { timestamp, topic, category } = this.state;

    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          value={timestamp}
          name="timestamp"
          onChange={this.handleChange}
        />
        <input type="text"
          value={topic}
          name="topic"
          onChange={this.handleChange}
        />
        <input type="text"
          value={category}
          name="category"
          onChange={this.handleChange}
        />
        <button type="submit">Add Timestamp</button>
      </form>
    );
  }
}

export default Form;
