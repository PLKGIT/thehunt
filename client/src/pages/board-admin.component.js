/*  React  */
import React, { Component } from 'react';

/*  User Routes  */
import UserService from "../services/user.service";
import AdminComponents from "../components/AdminTab";

/*  React Router  */
import { Link } from "react-router-dom";

/*  Styling  */
import "../styles/App.scss";

/*  Create and Export BoardAmin  */
export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
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
      <div className="container" >
        <h1 className="text-center admin" style={{marginTop:"40px"}}>ADMIN</h1>
        <AdminComponents />
        <br />
        <h5 className="text-info text-center" style={{marginBottom:"60px"}}>
          <Link to="/" className="link"><img src="./images/transparentlock.gif" alt="Still Lock" width="75px" />Unlock It Home</Link>
        </h5>

      </div>
    );
  }
}