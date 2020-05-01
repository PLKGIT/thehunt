/*  React  */
import React from "react";

/*  React Router  */
import {Link} from "react-router-dom";

/*  Create StudentPlay  */
function StudentPlay() {
    return (
        <div className="container">
            <br />
            <h1 className="text-center text-secondary">HUNT BEING PLAYED</h1>
            <h4 className="text-secondary">
                NAVIGATION
        <ul>
        <li><Link to="/student">Student Dashboard</Link></li>
                    <li>Logout</li>
                </ul>
            </h4>
            <h4 className="text-info">
                HUNT CONTENT
      </h4>
      <h3 className="text-center"><Link to="/">/Unlock It Home</Link></h3>
            <br />
        </div>
    );
}

/*  Export StudentPlay  */
export default StudentPlay;