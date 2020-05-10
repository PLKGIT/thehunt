import React, { Component } from "react";
import "../styles/home.component.scss"

import UserService from "../services/user.service";

export default class Home extends Component {

  componentDidMount() {
    UserService.getPublicContent();
  }
  render() {
    return (
        <div id="banner">
          <div id="cloud-scroll">
          <div className="container">
            <h1 className="text-center">Welcome to Unlock It!  The Hunt is on!</h1>
            </div>
          </div>
        </div>
    );
  }
}