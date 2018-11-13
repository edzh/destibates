import React, { Component } from 'react';
import { users } from '../../config/api';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      error: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(users, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).catch((err) => console.log(err));

    console.log(this.state.error);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { email, username, password, error } = this.state;

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" value={email} onChange={this.handleChange} />
          <input type="text" name="username" value={username} onChange={this.handleChange} />
          <input type="password" name="password" value={password} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>

        {!!error && <p>{error}</p>}
      </div>
    );
  }
}

export default Register;