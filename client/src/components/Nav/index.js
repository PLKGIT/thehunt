/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";

/*  App SCSS  */
import "../../styles/App.scss";

/*  React Bootstrap Components  */
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

/*  Create Nav */
class Nav extends Component {
  render() {
    return (
        <Navbar fixed="top" bg="info">
          <Navbar.Brand ><Link to="/" style={{ textDecoration: 'none' }}><h1 className="text-white display-3">Unlock It!</h1></Link>
          {/* <Navbar.Brand ><h1 className="text-white display-3">Unlock It!</h1> */}
          </Navbar.Brand>
          <Form className="inline ml-auto">
            <span className="text-white"><h6>Logout&emsp;</h6></span>
          </Form>
        </Navbar>
    );
  }
}

/*  Export Nav */
export default Nav;