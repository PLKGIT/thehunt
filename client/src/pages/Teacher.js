/*  React  */
import React from "react";

/*  React Router  */
import {Link} from "react-router-dom";

/*  Pages  */
// import TeacherCreate from "./TeacherCreate";
// import TeacherManageHunts from "./TeacherManageHunts";
// import TeacherManageStudents from "./TeacherManageStudents";

/*  Create Teacher  */
function Teacher() {
  return (
    <div className="container">
      <br />
      <h1 className="text-center text-secondary">TEACHER DASHBOARD</h1>
      <h4 className="text-secondary">
        NAVIGATION
        <ul>
        <li><Link to="/teacher">Teacher Dashboard</Link></li>
          <li>Logout</li>
        </ul>
      </h4>
      <h4 className="text-info">
        ICON OPTIONS
            <ul>
          <li><Link to="/teachercreate">Create</Link> Hunts</li>
          <li><Link to="/teachermanagehunts">Manage</Link> Hunts</li>
          <li><Link to="/teachermanagestudents">Manage</Link> Students</li>
        </ul>
      </h4>
      <h3 className="text-center"><Link to="/">/Unlock It Home</Link></h3>
      <br />
    </div>
  );
}

/*  Export Teacher  */
export default Teacher;