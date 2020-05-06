/*  React  */
import React, { Component } from "react";

/*  React Router  */
import { Link } from "react-router-dom";

/*  Authorization Token  */
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

/*  Axios  */
import axios from 'axios';

/*  React Bootstrap Components  */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/*  Create Login  */
class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const userData ={
      email: this.state.email,
      password: this.state.password
    }
    axios.post('/api/login', userData).then(res => {
      const {token} = res.data;
      localStorage.setItem('unlockit-jwt', token);
      this.props.history.push('/teacher')
    }).catch(err => console.log(err)
  );
};


render() {
  return (
    <div className="container">
      <Row>
        <Col>
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="text-center text-secondary">
            <img
              src="./images/unlock.gif"
              alt="Key in lock gif"
              width="150px"
            />
              Login to Hunt!
            </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardGroup>
            <Card border="info">
              <Card.Body>
                <Card.Text>
                  <Form onSubmit={event => this.handleFormSubmit(event)} className="text-info">
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        onChange={event => this.handleInputChange(event)}
                        value={this.state.email}
                        placeholder="Enter your email address"
                      />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        onChange={event => this.handleInputChange(event)}
                        value={this.state.password}
                        placeholder="Enter your password"
                      />
                      <Form.Text className="text-muted">
                        Your password is case sensitive.
                        </Form.Text>
                    </Form.Group>
                    <Button
                      variant="warning"
                      name="submit"
                      type="submit"
                      block
                    >
                      Login
                      </Button>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>

        <Col>
          <h5 className="text-info">
            <ul>
              <li>
                <Link to="/admin">Admin</Link> Dashboard
                </li>
              <li>
                <Link to="/teacher">Teacher</Link> Dashboard
                </li>
              <ul>
                <li>
                  <Link to="/teachercreate">Create Hunts</Link> |{" "}
                  <Link to="/teachermanagehunts">Manage Hunts</Link> |{" "}
                  <Link to="/teachermanagestudents">Manage Students</Link>
                </li>
              </ul>
              <li>
                <Link to="/student">Student</Link> Dashboard
                </li>
              <ul>
                <li>
                  <Link to="/studentplay">Play Hunts</Link> |{" "}
                  <Link to="/studenthistory">Hunts History</Link>
                </li>
              </ul>
              <li>
                <Link to="/junk">404 Error Page</Link>
              </li>
            </ul>
          </h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
        </Col>
      </Row>
    </div>
  );
}
}

/*  Export Login  */
export default Login;
