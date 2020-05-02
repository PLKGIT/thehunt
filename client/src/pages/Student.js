/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";

/*  Pages  */
// import StudentPlay from "./StudentPlay";
// import StudentHistory from "./StudentHistory";

/*  Create Student  */
class Student extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1 className="text-center text-secondary">STUDENT DASHBOARD</h1>
        <h4 className="text-info">
          CAROUSEL OPTIONS
        <ul>
            <li>Play Hunts</li>
            <li>Hunts History</li>
          </ul>
        </h4>
        <h3 className="text-center"><Link to="/">/Unlock It Home</Link></h3>
        <br />
      </div>
    );
  }
}

/*  Export Student  */
export default Student;