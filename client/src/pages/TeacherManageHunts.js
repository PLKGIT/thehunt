/*  React  */
import React from "react";

/*  Pages  */
// import Login from "./Login";
// import Teacher from "./Teacher";


/*  Create TeacherManageHunts  */
function TeacherManageHunts() {
  return (
    <div className="container">
      <br />
      <h1 className="text-center text-secondary">MANAGE HUNTS</h1>
      <h4 className="text-secondary">
        NAVIGATION
        <ul>
        <li><a href={"/teacher"}>Teacher Dashboard</a></li>
          <li>Logout</li>
        </ul>
      </h4>
      <h4 className="text-info">
        LIST
        <ul>
          <li>All Created Hunts - sorted by pending, active, complete</li>
          <li>Hunt Reports</li>
        </ul>
        FORM (EDITS)
      </h4>
      <h3 className="text-center"><a href={"/"}>/Unlock It Home</a></h3>
            <br />
        </div>
  );
}

/*  Export TeacherManageHunts  */
export default TeacherManageHunts;