/*  React  */
import React, { Component } from "react";

/*  React Router  */
import { Link } from "react-router-dom";
// import TeacherMap from "../components/TeacherMap/TeacherMap";

/*  CreateHuntCard Component  */
import CreateHuntCard from "../components/CreateHuntCard";

/*  Styling  */
import "../styles/gradient.scss";

/*  Create TeacherCreate  */
class TeacherCreate extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1 className="text-center">CREATE HUNTS</h1>
        <h5 className="text-secondary" style={{marginRight:'90%'}}>
         
          
         <Link className="backTab" to="/teacher"style={{ textDecoration: 'none'}}><i className="fas fa-arrow-left" style={{fontSize: '16px'}}></i>Back</Link>
      
   </h5>
       <CreateHuntCard/>

        <h5 className="text-info text-center">
          <Link to="/"className="link">
            <img src="./images/transparentlock.gif" alt="Still Lock" width="75px" />
            Unlock It Home
          </Link>
        </h5>
        <br />
      </div>
    );
  }
}

/*  Export TeacherCreate  */
export default TeacherCreate;