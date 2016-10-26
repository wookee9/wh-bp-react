import React from "react";

export default class PageA extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="page">
        <h1 class="cover-heading">React Router Page A</h1>
        <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p class="">
          <a href="#" class="btn btn-lg btn-secondary">Call to Action</a>
        </p>
        <p>(c) <a href="https://company.com">Company</a> 2016</p>
      </div>
    );
  }
}
