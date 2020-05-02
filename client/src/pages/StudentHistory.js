/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import {Link} from "react-router-dom";

/*  Create StudentHistory  */
class StudentHistory extends Component {
  Render(){

        return (
        <div className="container">
            <br />
            <h1 className="text-center text-secondary">HUNTS HISTORY</h1>
            <h4 className="text-secondary">
                NAVIGATION
                <ul>
                <li><Link to="/student">Student Dashboard</Link></li>
                </ul>
            </h4>
            <h4 className="text-info">
                HUNTS HISTORY CONTENT
      </h4>
      <h3 className="text-center"><Link to="/">/Unlock It Home</Link></h3>
            <br />
        </div>
    );
          
  }
}

/*  Export StudentHistory  */
export default StudentHistory;