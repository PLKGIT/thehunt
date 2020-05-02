/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";

/*  Create TeacherManageStudents  */
class TeacherManageStudents extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1 className="text-center text-secondary">MANAGE STUDENTS</h1>
        <h4 className="text-secondary">
          NAVIGATION
        <ul>
            <li><Link to="/teacher">Teacher Dashboard</Link></li>
          </ul>
        </h4>
        <h4 className="text-info">
          TABBED OPTIONS
        <ul>
            <li>Add/Edit Students</li>
            <li>Create Groups</li>
            <li>Student/Group Statistics</li>
          </ul>
        </h4>
        <h3 className="text-center"><Link to="/">/Unlock It Home</Link></h3>
        <br />
      </div>
    );
  }
}

/*  Export TeacherManageStudents  */
export default TeacherManageStudents;