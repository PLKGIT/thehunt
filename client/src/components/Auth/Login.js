/*  React  */
import React, { Component } from "react";

/*  React Router  */
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

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
    errors: {}
  };

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(userData);
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { errors } = this.state;
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
                          id="email"
                          className={classnames("", {
                            invalid: errors.email || errors.emailnotfound
                          })}
                          error={errors.email}
                          placeholder="Enter your email address"
                        />
                        <span className="red-text">
                          {errors.email}
                          {errors.emailnotfound}
                        </span>
                      </Form.Group>
                      <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          id="password"
                          onChange={event => this.handleInputChange(event)}
                          value={this.state.password}
                          className={classnames("", {
                            invalid: errors.password || errors.passwordincorrect
                          })}
                          error={errors.password}
                          placeholder="Enter your password"
                        />
                        <span className="red-text">
                          {errors.password}
                          {errors.passwordincorrect}
                        </span>
                      </Form.Group>
                      <Button
                        variant="warning"
                        name="submit"
                        type="submit"
                        block>
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);