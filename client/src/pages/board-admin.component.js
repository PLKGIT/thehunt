/*  React  */
import React, { Component } from 'react';

import UserService from "../services/user.service";
import AdminComponents from "../components/AdminTab";

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard()
  }

  render() {
    return (
      <div className="container">
        <AdminComponents/>
      </div>
    );
  }
}