/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";
import TeacherMap from '../components/TeacherMap/TeacherMap'


/*  Create TeacherCreate  */
class TeacherCreate extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1 className="text-center text-secondary">CREATE HUNTS</h1>
        <h5 className="text-secondary">
          NAVIGATION
        <ul>
            <li><Link to="/teacher">Teacher Dashboard</Link></li>
          </ul>
        </h5>
        <h5 className="text-info">
          CAROUSEL
        <ul>
            <li>Favorite Hunts</li>
            <li>Create from Scratch</li>
          </ul>
        FORM
        

        <TeacherMap 
        id="myMap"
        options={{
          center: { lat: 0, lng: 0 },
          zoom: 2,
          mapTypeId: 'hybrid'
        }}
        />
        

        </h5>
        <h5 className="text-info text-center">
      <Link to="/"><img src="./images/unlock.png" alt="Still Lock" width="75px"/>Unlock It Home</Link>
        </h5>
        <br />
      </div>
    );
  }
}

/*  Export TeacherCreate  */
export default TeacherCreate;