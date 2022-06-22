import React, { Component } from "react";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
