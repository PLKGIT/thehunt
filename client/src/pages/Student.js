/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";

/*  Components  */
import Carousel from "../components/Carousel";

/*  Create Student  */
class Student extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1 className="text-center text-secondary">STUDENTS</h1>
        <Carousel />
        <h5 className="text-info">
          <ul>
            <li>Play Hunts</li>
            <li>Hunts History</li>
            </ul>
            </h5>
            <h5>
        <center><Link to="/"><img src="./images/back.png" alt="Back icon" width="50px"/>Unlock It Home</Link></center>

        </h5>
        <br />
      </div>
    );
  }
}

/*  Export Student  */
export default Student;