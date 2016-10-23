import React from "react";
import Component1 from "Component1";
import Component2 from "Component2";

export default class Container extends React.Component {
  constructor() {
    super();
  }

  render() {
    var result = Date.now();

    return (
      <div>
        <h1>Container {result}</h1>
        <Component1/>
        <Component2/>
      </div>
    );
  }
}
