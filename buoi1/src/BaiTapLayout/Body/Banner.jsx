import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="bg-light container mt-4 mb-4">
        <div className="pt-4 pb-4">
          <h1>A warm welcome!</h1>
          <p>
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been removed from the framework. Why create
            custom CSS when you can use utilities?
          </p>
          <button className="btn btn-primary">Call to Action</button>
        </div>
      </div>
    );
  }
}
