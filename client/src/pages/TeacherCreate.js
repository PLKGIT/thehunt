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
        <h5 className="text-secondary">
          NAVIGATION
        <ul>
            <li><Link to="/teacher">Teacher Dashboard</Link></li>
          </ul>
        </h5>
        <h5 className="text-info">
          CAROUSEL
        <ul>
            <li>Favorite Hunts</li>
            <li>Create from Scratch</li>
          </ul>
        FORM
        </h5>
        <h5 className="text-info text-center">
      <Link to="/"><img src="./images/back.png" alt="Back icon" width="50px"/>Unlock It Home</Link>
        </h5>
        <br />
      </div>
    );
  }
}

/*  Export TeacherCreate  */
export default TeacherCreate;