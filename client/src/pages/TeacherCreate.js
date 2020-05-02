/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";

/*  Create TeacherCreate  */
class TeacherCreate extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1 className="text-center text-secondary">CREATE HUNTS</h1>
        <h4 className="text-secondary">
          NAVIGATION
        <ul>
            <li><Link to="/teacher">Teacher Dashboard</Link></li>
          </ul>
        </h4>
        <h4 className="text-info">
          CAROUSEL
        <ul>
            <li>Favorite Hunts</li>
            <li>Create from Scratch</li>
          </ul>
        FORM
      </h4>
        <h3 className="text-center"><Link to="/">/Unlock It Home</Link></h3>
        <br />
      </div>
    );
  }
}

/*  Export TeacherCreate  */
export default TeacherCreate;