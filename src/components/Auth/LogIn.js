import React, { Component } from 'react';
import AuthService from './AuthService';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.Auth = new AuthService();
  }

  componentWillMount() {
    // console.log(this.Auth.getProfile())
    this.Auth.loggedIn() && this.props.history.replace('/')
  }

  handleSubmit(event) {
    event.preventDefault()

    const { username, password } = this.state;

    this.Auth.login(username, password)
      .then(res => {
        this.props.history.replace('/');
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { username, password, error } = this.state;
    // console.log(error)

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button type="submit">Log In</button>
        </form>

        { error && <p>{error.message}</p>}
      </div>
    );
  }
}

export default LogIn;
