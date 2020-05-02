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
        <h4 className="text-secondary">
          NAVIGATION
        <ul>
            <li><Link to="/teacher">Teacher Dashboard</Link></li>
          </ul>
        </h4>
        <h4 className="text-info">
          LIST
        <ul>
            <li>All Created Hunts - sorted by pending, active, complete</li>
            <li>Hunt Reports</li>
          </ul>
        FORM (EDITS)
      </h4>
        <h3 className="text-center"><Link to="/">/Unlock It Home</Link></h3>
        <br />
      </div>
    );
  }
}

/*  Export TeacherManageHunts  */
export default TeacherManageHunts;