import React from "react";
import Navigation from "Navigation";
import Cover from "Cover";

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
