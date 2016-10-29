import React from "react";
import {Link, IndexLink} from 'react-router';

import * as actions from 'JS/actions/actions.jsx';

export default class Login extends React.Component {
  constructor() {
    super();
  }

  onGithubLogin(){
    console.log('clicked login');
    actions.startGithubLogin();
  }

  onFacebookLogin(){
    console.log('clicked login');
    actions.startFacebookLogin();
  }

  onLogin(){
    console.log('clicked login');
    var email = this.refs.emailText.value;
    var password = this.refs.passwordText.value;
    actions.startLogin(email, password);
  }

  render() {
    return (
      <div class="page">
        <h1 class="cover-heading">Login</h1>
        <p>Login with your Github or Facebook account.</p>
        <button class="btn btn-secondary" onClick={this.onGithubLogin}>Login with Github</button>
        <button class="btn btn-secondary" onClick={this.onFacebookLogin}>Login with Facebook</button>
        <p>Or with your email address and password.</p>

          Email <input ref="emailText" /><br/>
        Password <input ref="passwordText"/><br/>
      <button class="btn btn-secondary" onClick={this.onLogin.bind(this)}>Login</button><br/>

        <Link to="/signup" class="">Or create a new account</Link>
      </div>
    );
  }
}
