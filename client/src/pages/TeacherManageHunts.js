/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";

/*  Create TeacherManageHunts  */
class TeacherManageHunts extends Component {
  render() {

    return (
      <div className="container">
        <br />
        <h1 className="text-center text-secondary">MANAGE HUNTS</h1>
        <h5 className="text-secondary">
          NAVIGATION
        <ul>
            <li><Link to="/teacher">Teacher Dashboard</Link></li>
          </ul>
        </h5>
        <h5 className="text-info">
          LIST
        <ul>
            <li>All Created Hunts - sorted by pending, active, complete</li>
            <li>Hunt Reports</li>
          </ul>
        FORM (EDITS)
        </h5>
        <h5 className="text-info text-center">
      <Link to="/"><img src="./images/transparentlock.gif" alt="Still Lock" width="75px"/>Unlock It Home</Link>
        </h5>
        <br />
      </div>
    );
  }
}

/*  Export TeacherManageHunts  */
export default TeacherManageHunts;