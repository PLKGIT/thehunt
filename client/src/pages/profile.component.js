/*  React   */
import React, { Component } from "react";
/*  Auth Service   */
import AuthService from "../services/auth.service";
/*  React Bootstrap Components  */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        <Row>
          <Col>
          </Col>
          <Col className="bg-white">
          <p></p>
          <h4 className="text-center">Profile</h4>
          <p><strong>User:</strong>{" "}{currentUser.first_name} {" "} {currentUser.last_name}</p>
                <p><strong>User Id:</strong>{" "}{currentUser.id}</p>
                <p><strong>Email:</strong>{" "}{currentUser.email}</p>
                <p><strong>Status:</strong>{" "}{currentUser.status}</p>
                <p><strong>Authorities:</strong></p>
                <ul>
                  {currentUser.roles &&
                    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul>
          </Col>
          <Col>
          </Col>
        </Row>
      </div>
    );
  }
}