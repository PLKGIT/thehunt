/*  React  */
import React from "react";

/*  Pages  */
// import Login from "./Login";
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
        <li><a href={"/teacher"}>Teacher Dashboard</a></li>
          <li>Logout</li>
        </ul>
      </h4>
      <h4 className="text-info">
        ICON OPTIONS
            <ul>
          <li><a href={"/teachercreate"}>Create</a> Hunts</li>
          <li><a href={"/teachermanagehunts"}>Manage</a> Hunts</li>
          <li><a href={"/teachermanagestudents"}>Manage</a> Students</li>
        </ul>
      </h4>
      <h3 className="text-center"><a href={"/"}>/Unlock It Home</a></h3>
      <br />
    </div>
  );
}

/*  Export Teacher  */
export default Teacher;