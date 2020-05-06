/*  React  */
import React, { Component } from "react";

/*  React Router  */
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

/*  React Bootstrap Components  */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/*  Create Register  */
class Register extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
    role: "",
    errors: {},
  };

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
    };
    console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
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
              Add Users!
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardGroup>
              <Card border="info">
                <Card.Body>
                  <Card.Text>
                    <Form noValidate onSubmit={(event) => this.handleFormSubmit(event)}
                      className="text-info">
                      <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="first_name"
                          name="first_name"
                          onChange={(event) => this.handleInputChange(event)}
                          value={this.state.first_name}
                          id="first_name"
                          className={classnames("", {
                            invalid: errors.first_name
                          })}
                          error={errors.first_name}
                          placeholder="Enter your first name"
                        />
                        <span className="red-text">{errors.first_name}</span>
                      </Form.Group>
                      <Form.Group controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="last_name"
                          name="last_name"
                          onChange={(event) => this.handleInputChange(event)}
                          value={this.state.last_name}
                          id="last_name"
                          className={classnames("", {
                            invalid: errors.last_name
                          })}
                          error={errors.last_name}
                          placeholder="Enter your last name"
                        />
                        <span className="red-text">{errors.last_name}</span>
                      </Form.Group>
                      <Form.Group controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          onChange={(event) => this.handleInputChange(event)}
                          value={this.state.email}
                          id="email"
                          className={classnames("", {
                            invalid: errors.email
                          })}
                          error={errors.email}
                          placeholder="Enter your email address"
                        />
                        <span className="red-text">{errors.email}</span>
                      </Form.Group>
                      <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          onChange={(event) => this.handleInputChange(event)}
                          value={this.state.password}
                          id="password"
                          className={classnames("", {
                            invalid: errors.password
                          })}
                          error={errors.password}
                          placeholder="Enter a password"
                        />
                        <span className="red-text">{errors.password}</span>
                      </Form.Group>
                      <Form.Group controlId="formConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password2"
                          onChange={(event) => this.handleInputChange(event)}
                          value={this.state.password2}
                          id="password2"
                          className={classnames("", {
                            invalid: errors.password2
                          })}
                          error={errors.password2}
                          placeholder="Confirm your password"
                        />
                        <span className="red-text">{errors.password2}</span>>
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));