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
          <div class="homeText">
            <h2 class="welcome">Welcome to Unlock It!
            <img src="../images/transparentlock.gif"/></h2>
            <h2>The Hunt is on!</h2>
          </div>
        </div>
      </div>

    );
  }
}