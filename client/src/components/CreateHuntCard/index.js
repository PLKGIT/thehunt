import React, { Component, Fragment } from "react";

import { Button } from 'react-bootstrap'

/*  React Router  */
import { Link } from "react-router-dom";

import TeacherMap from "../TeacherMap/TeacherMap";

/* Styling */
import "./style.scss";

class CreateHuntCard extends Component {

  state = {
    showCreateFromScratchForm: false
  };

  handleClick = event => {
    //alert("card scratch create....")
    this.setState({showCreateFromScratchForm: true});
    //this.forceUpdate();
  }
 
  render() {
    return (
      <Fragment>
        <div class="card-container">
          <div class="card">
            <div class="card-count-container">
              <div class="card-count">Create From Scratch</div>
            </div>

            <div class="card-content">
              
              <Button variant="none" onClick={this.handleClick}>Click here to create From scratch</Button>
            </div>

            <div class="card-footer">Lorem ipsum dolor sit amet.</div>
          </div>

          <div class="card">
            <div class="card-count-container">
              <div class="card-count">Choose from existing one</div>
            </div>
            <div class="card-content">
            <Button variant="none">Click here to Choose from existing one</Button>
              {/* <Link to="/teachermanagestudents">
                <h4>Click here to Choose from existing one</h4>
              </Link> */}
            </div>

            <div class="card-footer">Lorem ipsum dolor sit amet.</div>
          </div>
        </div>

        <TeacherMap
          id="myMap"
          isActive={this.state.showCreateFromScratchForm}
          options={{
            center: { lat: 0, lng: 0 },
            zoom: 2,
            mapTypeId: "hybrid",
          }}
        />
      </Fragment>
    );
  }
}

// class CreateHuntCard extends Component {
//   render() {
//     return (
//       // <div>
//       //   <h1>hello I am create</h1>
//       // </div>
//       <div>
//         <div class="card-container">
//           <div class="card">
//             <div class="card-count-container">
//               <div class="card-count">Create From Scratch</div>
//             </div>

//             <div class="card-content">
//               <h4>Click here to create From scratch</h4>
//             </div>

//             <div class="card-footer">Lorem ipsum dolor sit amet.</div>
//           </div>

//           <div class="card">
//             <div class="card-count-container">
//               <div class="card-count">Choose from existing one</div>
//             </div>
//             <div class="card-content">
//               <Link to="/teachermanagestudents">
//                 <h4>Click here to Choose from existing one</h4>
//               </Link>
//             </div>

//             <div class="card-footer">Lorem ipsum dolor sit amet.</div>
//           </div>
//         </div>
//       </div>

//       //       {/* <TeacherMap
//       //   id="myMap"
//       //   isActive={false}
//       //   options={{
//       //     center: { lat: 0, lng: 0 },
//       //     zoom: 2,
//       //     mapTypeId: "hybrid",
//       //   }}
//       // /> */}
//     );
//   }
// }

export default CreateHuntCard;
