import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

/*  React Bootstrap Components  */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AuthService from "../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vfirst = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        First name must be between 3 and 20 characters.
      </div>
    );
  }
};

const vlast = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        Last name must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Your password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeFirst = this.onChangeFirst.bind(this);
    this.onChangeLast = this.onChangeLast.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      status: "Active",
      successful: false,
      message: ""
    };
  }

  onChangeFirst(e) {
    this.setState({
      first_name: e.target.value
    });
  }

  onChangeLast(e) {
    this.setState({
      last_name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.first_name,
        this.state.last_name,
        this.state.email,
        this.state.password,
        this.state.status
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleRegister}
          ref={c => {
            this.form = c;
          }}>
          {!this.state.successful && (
            <div>
              <Row>
                <Col>
                  <div className="form-group">
                    <label htmlFor="first">First</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="first"
                      value={this.state.first_name}
                      onChange={this.onChangeFirst}
                      validations={[required, vfirst]}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="form-group">
                    <label htmlFor="last">Last</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="last"
                      value={this.state.last_name}
                      onChange={this.onChangeLast}
                      validations={[required, vlast]}
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      validations={[required, email]}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                      type="password"
                      className="form-control"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      validations={[required, vpassword]}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form-group">
                    <label htmlFor="email">Status</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="status"
                      value="Active"
                      readOnly
                    />
                  </div>
                </Col>
                <Col>
              
                </Col>
              </Row>
            <Row>
              <Col>
              <div className="form-group">
                <button className="btn btn-primary btn-block">Register</button>
              </div>
              </Col>
            </Row>
              
            </div>)}
          {this.state.message && (
            <div className="form-group">
              <div
                className={
                  this.state.successful
                    ? "alert alert-success"
                    : "alert alert-danger"
                }
                role="alert">
                {this.state.message}
              </div>
            </div>)}
          <CheckButton
            style={{ display: "none" }}
            ref={c => {
              this.checkBtn = c;
            }} />
        </Form>
      </div >
    );
  }
}