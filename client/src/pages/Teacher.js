/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";

/* Styling */
import "../styles/teacher.scss";

/* TeacherCard Component */
import TeacherCard from '../components/TeacherCard';

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

        <TeacherCard />
        <h5 className="text-info text-center">
      <Link to="/"><img src="./images/transparentlock.gif" alt="Still Lock" width="75px"/>Unlock It Home</Link>
        </h5>
        <br />
      </div>
    );
  }
}

/*  Export Teacher  */
export default Teacher;