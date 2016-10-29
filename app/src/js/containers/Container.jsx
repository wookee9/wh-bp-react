import React from "react";
import Navigation from "Navigation";

export default class Container extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navigation/>
        {this.props.children}
      </div>
    );
  }
}
