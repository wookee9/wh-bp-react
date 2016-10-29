import React from "react";

import * as actions from 'JS/actions/actions.jsx';

export default class SignUp extends React.Component {
  constructor() {
    super();
  }

  onSignUp(){
    console.log('clicked SignUp');
    var email = this.refs.emailText.value;
    var password = this.refs.passwordText.value;
    actions.signUp(email, password);
  }

  render() {
    return (
      <div class="page">
        <h1 class="cover-heading">Sign Up</h1>
        <p>Create a new account</p>

          Email <input ref="emailText" /><br/>
        Password <input ref="passwordText" /><br/>
      <button class="btn btn-secondary" onClick={this.onSignUp.bind(this)}>Sign Up</button>

      </div>
    );
  }
}
