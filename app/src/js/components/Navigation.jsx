import React from "react";

export default class Navigation extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav class="navbar navbar-full navbar-dark bg-inverse">
        <a class="navbar-brand" href="#">Logo</a>
        <div class="nav navbar-nav float-xs-right">
          <a class="nav-item nav-link active" href="#">Page1</a>
          <a class="nav-item nav-link" href="#">Page2</a>
          <a class="nav-item nav-link" href="#">Page3</a>
        </div>
      </nav>
    );
  }
}
