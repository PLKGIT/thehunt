/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";
import ManageStudentTab from '../components/ManageStudentTab';

/*  Create TeacherManageStudents  */
class TeacherManageStudents extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1 className="text-center">MANAGE STUDENTS</h1>
        <h5 className="text-secondary" style={{marginRight:'90%'}}>
         
          
         <Link className="backTab" to="/teacher"style={{ textDecoration: 'none'}}><i className="fas fa-arrow-left" style={{fontSize: '16px'}}></i>Back</Link>
      
   </h5>
        <ManageStudentTab/>
        {/* <h5 className="text-info">
          TABBED OPTIONS
        <ul>
            <li>Add/Edit Students</li>
            <li>Create Groups</li>
            <li>Student/Group Statistics</li>
          </ul>
        </h5> */}
        <h5 className="text-info text-center">
      <Link to="/" className="link"><img src="./images/transparentlock.gif" alt="Still Lock" width="75px"/>Unlock It Home</Link>
        </h5>
        <br />
      </div>
    );
  }
}

/*  Export TeacherManageStudents  */
export default TeacherManageStudents;