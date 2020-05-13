/*  React  */
import React, { Component } from "react";

/*  Styling  */
import "../styles/home.component.scss"

/*  User Auth  */
import UserService from "../services/user.service";

/*  Create and Export Home  */
export default class Home extends Component {

  componentDidMount() {
    UserService.getPublicContent();
  }
  render() {
    return (

      <div id="banner">
        <div id="cloud-scroll">
          <div class="homeText">
            <h2 class="welcome" style={{fontSize:"2.5em"}}>Welcome to Unlock It!
            <img src="../images/transparentlock.gif"/></h2>
            <h2>The Hunt is on!</h2>
          </div>
        </div>
      </div>

    );
  }
}