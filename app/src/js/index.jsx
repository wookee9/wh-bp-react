import React from "react";
import ReactDOM from "react-dom";
import Container from "Container";
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import PageA from "Components/PageA.jsx";
import PageB from "Components/PageB.jsx";
import PageC from "Components/PageC.jsx";
import Login from "Components/Login.jsx";
import SignUp from "Components/SignUp.jsx";

import 'JS/firebase/index.jsx';

require('Stylesheets');

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Container}>
      <Route path="PageB" component={PageB}/>
      <Route path="PageC" component={PageC}/>
      <Route path="PageA" component={PageA}/>
      <Route path="SignUp" component={SignUp}/>
      <IndexRoute component={Login}/>
    </Route>
  </Router>
, app);
