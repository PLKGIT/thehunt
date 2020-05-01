/*  React  */
import React from "react";

/*  Login Page  */
import Login from "./Login";
// import StudentPlay from "./StudentPlay";
// import StudentHistory from "./StudentHistory";

/*  Create Student  */
function Student() {
  return (
    <div className="container">
      <br />
      <h1 className="text-center text-secondary">STUDENT DASHBOARD</h1>
      <h4 className="text-secondary">
        NAVIGATION
      <ul>
      <li><a href={Student}>Student Dashboard</a></li>
          <li>Logout</li>
        </ul>
      </h4>
      <h4 className="text-info">
        CAROUSEL OPTIONS
        <ul>
          <li>Play Hunts</li>
          <li>Hunts History</li>
        </ul>
      </h4>
      <h3 className="text-center"><a href={Login}>/Unlock It Home</a></h3>
      <br />
    </div>
  );
}

/*  Export Student  */
export default Student;