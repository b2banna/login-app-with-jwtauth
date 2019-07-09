import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import AuthService from '../AuthService';
import withAuth from '../withAuth';
const Auth = new AuthService();


class App extends React.Component {

  handleLogout() {
    Auth.logout()
    this.props.history.replace('/login');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome {this.props.user.username}</h2>
          <button className="btn-login" type="button" onClick={this.handleLogout.bind(this)}>Logout</button>
        </header>
      </div>
    );
  }
}

export default withAuth(App);
