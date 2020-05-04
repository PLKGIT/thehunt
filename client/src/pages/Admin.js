/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";

/*  Create Admin  */
class Admin extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1 className="text-center text-secondary">ADMIN DASHBOARD</h1>
        <h5 className="text-info">
          TABBED OPTIONS
        <ul>
            <li>Add/Edit Org</li>
            <li>Add/Edit a Teacher</li>
            <li>Add/Edit a Student</li>
          </ul>
        </h5>
        <h5 className="text-info text-center">
      <Link to="/"><img src="./images/unlock.png" alt="Still Lock" width="75px"/>Unlock It Home</Link>
        </h5>
        <br />
      </div>
    );

  }
}

/*  Export Admin  */
export default Admin;