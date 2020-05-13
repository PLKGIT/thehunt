/*  React  */
import React, { Component } from "react";

/*  User Auth  */
import UserService from "../services/user.service";

/*  React Router  */
import { Link } from "react-router-dom";

/* TeacherCard Component */
import TeacherCard from '../components/TeacherCard';

/*  Create and Export BoardTeacher  */
export default class BoardTeacher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getTeacherBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container user-container">
      <br />
      <h1 className="text-center">TEACHER DASHBOARD</h1>
      <TeacherCard />
      <h5 className="text-info text-center">
    <Link to="/" className="link"><img src="./images/transparentlock.gif" alt="Still Lock" width="75px"/>Unlock It Home</Link>
      </h5>
      <br />
    </div>
    );
  }
}