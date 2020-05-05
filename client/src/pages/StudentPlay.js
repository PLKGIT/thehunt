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
          // onMapLoad={map => {
          //   var marker = new window.google.maps.Marker({
          //     position: { lat: 41.0082, lng: 28.9784 },
          //     map: map,
          //     title: 'Hello Istanbul!'
          //   });
          // }}
        />
      );
    }
  }
  
render(<StudentPlay />, document.getElementById('root'));


/*  Export StudentPlay  */
export default StudentPlay;