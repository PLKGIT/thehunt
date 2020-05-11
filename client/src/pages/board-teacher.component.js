import React, { Component } from "react";

import UserService from "../services/user.service";

/*  React Router  */
import { Link } from "react-router-dom";

/* TeacherCard Component */
import TeacherCard from '../components/TeacherCard';

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
      <div className="container">
      <br />
      <h1 className="text-center text-secondary">TEACHER DASHBOARD</h1>
      <h5 className="text-secondary">
        NAVIGATION
      <ul>
          <li><Link to="/teacher">Teacher Dashboard</Link></li>
        </ul>
      </h5>
      {/* <h5 className="text-info">
        ICON OPTIONS
          <ul>
          <li><Link to="/teachercreate">Create</Link> Hunts</li>
          <li><Link to="/teachermanagehunts">Manage</Link> Hunts</li>
          <li><Link to="/teachermanagestudents">Manage</Link> Students</li>
        </ul>
      </h5> */}

      <TeacherCard />
      <h5 className="text-info text-center">
    <Link to="/"><img src="./images/transparentlock.gif" alt="Still Lock" width="75px"/>Unlock It Home</Link>
      </h5>
      <br />
    </div>
    );
  }
}