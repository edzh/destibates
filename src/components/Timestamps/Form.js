import React, { Component } from 'react';
import { timestamps } from '../../config/api';
import { vods } from '../../config/api';
import AuthService from '../Auth/AuthService';

const Auth = new AuthService();

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timestamp: '',
      topic: '',
      category: ''
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
    const { timestamp, topic, category, vodId } = this.state

    event.preventDefault();

      fetch(`${timestamps}?access_token=${Auth.getToken()}`, {
      method: 'post',
      body: JSON.stringify({ timestamp,
        topic,
        category,
        vodId,
        vod: this.props.vod,
        uid: Auth.getProfile()._id
      }),
      headers: {
        'Content-Type': 'application/json',
        'access_token': Auth.getToken()
      }
    })
    .then(response => response.json())
    .then(response =>
      fetch(`${vods}/${this.props.vod}?access_token=${Auth.getToken()}`, {
        method: 'put',
        body: JSON.stringify({
          timestamp: response._id
        }),
        headers: {
          'Content-Type': 'application/json',
          'access_token': Auth.getToken()
        }
      })
    )
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
