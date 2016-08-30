import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
  _signUp() {
    this.props.router.push("/signup")
  }

  _login() {
    this.props.router.push("/login")
  }

  render() {
    if (this.props.currentUser) {
      return (
        <ul>
          <li>Welcome, {this.props.currentUser.username}!</li>
          <li>
            <button value="Logout" onClick={this.props.logout} />
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li><Link to="/signup">Sign up!</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      );
    }
  }
}

export default Greeting;
