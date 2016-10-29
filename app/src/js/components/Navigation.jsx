import React from "react";
import {Link, IndexLink} from 'react-router';

export default class Navigation extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav class="navbar navbar-full navbar-dark bg-inverse">
        <IndexLink to="/" class="navbar-brand">Logo</IndexLink>
        <div class="nav navbar-nav float-xs-right">
          {/*<a class="nav-item nav-link active" href="#">PageA</a>*/}
          <Link to="/pageb" class="nav-item nav-link" activeClassName="active">PageB</Link>
          <Link to="/pagec" class="nav-item nav-link" activeClassName="active">PageC</Link>
          <Link to="/" class="nav-item nav-link" activeClassName="active">Login</Link>
        </div>
      </nav>
    );
  }
}
