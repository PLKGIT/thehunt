/*  React  */
import React from "react";

/*  Create TeacherManageStudents  */
function TeacherManageStudents() {
  return (
    <div className="container">
      <br />
      <h1 className="text-center text-secondary">MANAGE STUDENTS</h1>
      <h4 className="text-secondary">
        NAVIGATION
        <ul>
          <li>Teacher Dashboard</li>
          <li>Logout</li>
        </ul>
      </h4>
      <h4 className="text-info">
        TABBED OPTIONS
        <ul>
          <li>Add/Edit Students</li>
          <li>Create Groups</li>
          <li>Student/Group Statistics</li>
        </ul>
      </h4>
      <h3 className="text-center"><a href={"/"}>/Unlock It Home</a></h3>
            <br />
        </div>
  );
}

/*  Export TeacherManageStudents  */
export default TeacherManageStudents;