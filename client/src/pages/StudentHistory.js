/*  React  */
import React from "react";

/*  Create StudentPlay  */
function StudentPlay() {
    return (
        <div className="container">
            <br />
            <h1 className="text-center text-secondary">HUNTS HISTORY</h1>
            <h4 className="text-secondary">
                NAVIGATION
                <ul>
                    <li>Student Dashboard</li>
                    <li>Logout</li>
                </ul>
            </h4>
            <h4 className="text-info">
                HUNTS HISTORY CONTENT
      </h4>
            <h3 className="text-center"><a href={"/"}>/Unlock It Home</a></h3>
            <br />
        </div>
    );
}

/*  Export StudentPlay  */
export default StudentPlay;