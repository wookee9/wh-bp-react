import React from 'react';
import {Route, Router, IndexRoute, Link, hashHistory} from 'react-router';

import Container from "Container";
import PageA from "Components/PageA.jsx";
import PageB from "Components/PageB.jsx";
import PageC from "Components/PageC.jsx";
import Login from "Components/Login.jsx";
import SignUp from "Components/SignUp.jsx";

import firebase from "app/firebase/";

const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser){
    replace('/');
  }
  next();
};

const redirectIfLoggedIn = (nextState, replace, next) => {
  if (!firebase.auth().currentUser){
    replace('/PageA');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Container}>
      <Route path="PageB" component={PageB} onEnter={requireLogin} />
      <Route path="PageC" component={PageC} onEnter={requireLogin}/>
      <Route path="PageA" component={PageA} onEnter={requireLogin}/>
      <Route path="SignUp" component={SignUp} onEnter={redirectIfLoggedIn}/>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>
);
