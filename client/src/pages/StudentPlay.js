/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";

/*  Create StudentPlay  */
class StudentPlay extends Component {
    render() {

        return (
            <div className="container">
                <br />
                <h1 className="text-center text-secondary">HUNT BEING PLAYED</h1>
                <h5 className="text-secondary">
                    NAVIGATION
        <ul>
                        <li><Link to="/student">Student Dashboard</Link></li>
                    </ul>
                </h5>
                <h5 className="text-info">
                    HUNT CONTENT
      </h5>
      <h5 className="text-info text-center">
      <Link to="/"><img src="./images/unlock.png" alt="Still Lock" width="75px"/>Unlock It Home</Link>
        </h5>
                <br />
            </div>
        );

    }
}

/*  Export StudentPlay  */
export default StudentPlay;