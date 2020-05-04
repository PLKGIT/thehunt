/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";

/*  Create Teacher  */
class Teacher extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1 className="text-center text-secondary">TEACHER DASHBOARD</h1>
        <h5 className="text-secondary">
          NAVIGATION
        <ul>
            <li><Link to="/teacher">Teacher Dashboard</Link></li>
          </ul>
        </h5>
        <h5 className="text-info">
          ICON OPTIONS
            <ul>
            <li><Link to="/teachercreate">Create</Link> Hunts</li>
            <li><Link to="/teachermanagehunts">Manage</Link> Hunts</li>
            <li><Link to="/teachermanagestudents">Manage</Link> Students</li>
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

/*  Export Teacher  */
export default Teacher;