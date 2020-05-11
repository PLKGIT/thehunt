import React, { Component } from "react";
import "../styles/home.component.scss"

import UserService from "../services/user.service";
import Navbar from 'react-bootstrap/Navbar'
export default class Home extends Component {

  componentDidMount() {
    UserService.getPublicContent();
  }
  render() {
    return (
      <div>
{/* <Navbar bg="light" fixed="top">
    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
  </Navbar> */}
   <h1 className="text-center">Welcome to Unlock It!  The Hunt is on!</h1>
           
     <div id="banner">
       <div id ="cloud-scroll">
        
       </div>
            </div>
     </div>
        
    );
  }
}