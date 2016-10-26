import React from "react";
import ReactDOM from "react-dom";
import Container from "Container";
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import PageA from "PageA";
import PageB from "PageB";
import PageC from "PageC";

require('Stylesheets');

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Container}>
      <Route path="PageB" component={PageB}/>
      <Route path="PageC" component={PageC}/>
      <IndexRoute component={PageA}/>
    </Route>
  </Router>
, app);
