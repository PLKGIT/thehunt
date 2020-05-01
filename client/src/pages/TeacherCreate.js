/*  React  */
import React from "react";

/*  Create TeacherCreate  */
function TeacherCreate() {
  return (
    <div className="container">
      <br />
      <h1 className="text-center text-secondary">CREATE HUNTS</h1>
      <h4 className="text-secondary">
        NAVIGATION
        <ul>
          <li>Teacher Dashboard</li>
          <li>Logout</li>
        </ul>
      </h4>
      <h4 className="text-info">
        CAROUSEL
        <ul>
          <li>Favorite Hunts</li>
          <li>Create from Scratch</li>
        </ul>
        FORM
      </h4>
      <h3 className="text-center"><a href={"/"}>/Unlock It Home</a></h3>
            <br />
        </div>
  );
}

/*  Export TeacherCreate  */
export default TeacherCreate;