/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";

/*  Components  */
import Carousel from "../components/Carousel";

/* Styling */
import "../styles/teacher.scss";

/*  Create Student  */
class Student extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1 className="text-center text-secondary text-white">STUDENTS</h1>
        <Carousel />
        <h5 className="text-info">
          <ul>
            <li>Play Hunts</li>
            <li>Hunts History</li>
            </ul>
            </h5>
            <h5 className="text-info text-center">
      <Link to="/"><img src="./images/transparentlock.gif" alt="Still Lock" width="75px"/>Unlock It Home</Link>
        </h5>
        <br />
      </div>
    );
  }
}

/*  Export Student  */
export default Student;