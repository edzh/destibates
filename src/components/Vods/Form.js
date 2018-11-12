import React, { Component } from 'react';
import {vods} from '../../config/api'
import AuthService from '../Auth/AuthService';
import moment from 'moment';
import PickDate from '../PickDate';

const Auth = new AuthService();

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vodId: '',
      date: moment().format(),
      timestamps: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()

    fetch(`${vods}?access_token=${Auth.getToken()}`, {
      method: 'post',
      body: JSON.stringify({
        vodId: this.state.vodId,
        date: this.state.date
      }),
      headers: {
        "Content-Type": "application/json",
        "access_token": Auth.getToken()
      }
    }).catch((err) => console.log(err));
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onDateChange(date, value) {
    this.setState({ [value]: date });
  }

  render() {
    const { vodId } = this.state;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            id="vodId"
            name="vodId"
            value={vodId}
            onChange={this.handleChange}
            placeholder="vodId"/>
          <PickDate id="date" value="date" onDateChange={this.onDateChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
