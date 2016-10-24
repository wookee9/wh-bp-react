import React from "react";
import Navigation from "Navigation";
import Content from "Content";

export default class Container extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navigation/>
        <Content/>
      </div>
    );
  }
}
