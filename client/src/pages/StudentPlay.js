import React, { Component } from 'react';
import { render } from 'react-dom';
//import { Link } from "react-router-dom";
import Map from "../components/Map/Map.js"


class StudentPlay extends Component {
    // constructor() {
    //   super();
    // }
  
    render() {
      return (
        <Map
          id="myMap"
          options={{
            center: { lat: 0, lng: 0 },
            zoom: 2,
            mapTypeId: 'hybrid'
          }}
        />
      );
    }
  }
  
render(<StudentPlay />, document.getElementById('root'));


/*  Export StudentPlay  */
export default StudentPlay;