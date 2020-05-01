/*  React  */
import React from "react";

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
          <li>Teacher Dashboard</li>
          <li>Logout</li>
        </ul>
      </h4>
      <h4 className="text-info">
        ICON OPTIONS
            <ul>
          <li>Create Hunts</li>
          <li>Manage Hunts</li>
          <li>Manage Students</li>
        </ul>
      </h4>
      <h3 className="text-center"><a href={"/"}>/Unlock It Home</a></h3>
      <br />
    </div>
  );
}

/*  Export Teacher  */
export default Teacher;