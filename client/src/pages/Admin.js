/*  React  */
import React, { Component } from 'react';

/*  React Router  */
// import { Link } from "react-router-dom";

/*  Pages  */
// import Login from "./Login";

/*  Create Admin  */
class Admin extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1 className="text-center text-secondary">ADMIN DASHBOARD</h1>
        <h4 className="text-info">
          TABBED OPTIONS
        <ul>
            <li>Add/Edit Org</li>
            <li>Add/Edit a Teacher</li>
            <li>Add/Edit a Student</li>
          </ul>
        </h4>
        {/* <h3 className="text-center"><Link to="/">/Unlock It Home</Link></h3> */}
        <br />
      </div>
    );

  }
}

/*  Export Admin  */
export default Admin;