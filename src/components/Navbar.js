import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AuthService from './Auth/AuthService';
import { users } from '../config/api'
import { withRouter } from 'react-router';

const Auth = new AuthService();

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  // componentDidMount() {
  //   fetch(`${users}?access_token=${Auth.getToken()}`)
  //     .then(response => response.json())
  //     .then(user => console.log(user));

  // }

  handleLogout() {
    Auth.logout()
    this.props.history.replace('/login');
  }

  render() {
    if (Auth.loggedIn()) {
      return(
        <div className="p-6 mb-4 shadow-md bg-grey-darker flex">
          <NavLink to="/">
            <h1 className="text-white mr-6">VODstiny</h1>
          </NavLink>
          <p><button onClick={this.handleLogout.bind(this)}>Logout</button></p>
        </div>
    )} else {
      return (
        <div className="p-6 mb-4 shadow-md bg-grey-darker">
          <h1 className="text-white mr-6">VODstiny</h1>
          <NavLink to="/login">Login</NavLink>
        </div>
    )}
  }
}


export default withRouter(Navbar);
