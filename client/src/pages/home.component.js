import React, { Component } from "react";
import "../styles/home.component.scss"

import UserService from "../services/user.service";
import Navbar from 'react-bootstrap/Navbar'
export default class Home extends Component {

  componentDidMount() {
    UserService.getPublicContent();
  }
  render() {
    return (
      <div className="container">
        <div id="banner">
          <div id="cloud-scroll">
            <h1 className="text-center">Welcome to Unlock It!</h1>
            <h2 className="text-center">The Hunt is on!</h2>
          </div>
        </div>
      </div>
    );
  }
}