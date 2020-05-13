/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";

/*  Components  */
import Carousel from "../components/Carousel";

/*  Styling  */
import "../styles/gradient.scss";

/*  User Auth  */
import UserService from "../services/user.service";

/*  Create and Export BoardUser  */
export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
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
        <h1 className="text-center">STUDENTS</h1>
        <Carousel />
            <h5 className="text-info text-center">
      <Link to="/" className="link"><img src="./images/transparentlock.gif" alt="Still Lock" width="75px"/>Unlock It Home</Link>
        </h5>
        <br />
      </div>
    );
  }
}