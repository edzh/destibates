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
      return(
        <div className="p-4 shadow-md bg-grey-darker flex">
          <NavLink to="/">
            <h2 className="text-white mr-6">VODstiny</h2>
          </NavLink>
          {Auth.loggedIn()
            ? <p><button onClick={this.handleLogout.bind(this)}>Logout</button></p>
            : <NavLink to="/login">Login</NavLink>
          }
        </div>
    )
  }
}


export default withRouter(Navbar);
