/*  React  */
import React, { Component } from 'react';

/*  React-dom  */
import { render } from 'react-dom';

/*  Map Component  */
import Map from "../components/Map/Map.js"

/*  Create and Export StudentPlay  */
class StudentPlay extends Component {
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