import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AuthService from './Auth/AuthService';
import withAuth from './Auth/withAuth';
import { withRouter } from 'react-router';

const Auth = new AuthService();

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user
    }

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    Auth.logout()
    this.props.history.replace('/login');

    this.setState({
      user: null
    });
  }

  render() {

    console.log(this.props.user);
    if (this.state.user) {
      return(
        <div className="p-6 mb-4 shadow-md bg-grey-darker">
          <h1 className="text-white mr-6">VODstiny</h1>
          <h2>Welcome {this.props.user.username}</h2>
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


export default withRouter(withAuth(Navbar));
