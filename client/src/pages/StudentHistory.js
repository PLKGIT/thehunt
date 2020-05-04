/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import {Link} from "react-router-dom";

/*  Create StudentHistory  */
class StudentHistory extends Component {
  render(){
        return (
        <div className="container">
            <br />
            <h1 className="text-center text-secondary">HUNTS HISTORY</h1>
            <h5 className="text-secondary">
                NAVIGATION
                <ul>
                <li><Link to="/student">Student Dashboard</Link></li>
                </ul>
            </h5>
            <h5 className="text-info">
                HUNTS HISTORY CONTENT
      </h5>
      <h5 className="text-info text-center">
      <Link to="/"><img src="./images/unlock.png" alt="Still Lock" width="75px"/>Unlock It Home</Link>
        </h5>
            <br />
        </div>
    );
  }
}

/*  Export StudentHistory  */
export default StudentHistory;