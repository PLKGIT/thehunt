/*  React  */
import React, { Component } from "react";

/*  React Router  */
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/*  App SCSS  */
import "../../styles/App.scss";

/*  React Bootstrap Components  */
import Navbar from 'react-bootstrap/Navbar';

/*  Auth Components  */
import AuthService from "../../services/auth.service";

/*  Pages from Authentication  */
import Login from "../../pages/login.component";
import Home from "../../pages/home.component";
import Profile from "../../pages/profile.component";

/*  Pages  */
// Admin
import BoardAdmin from "../../pages/board-admin.component";
// Teacher
import BoardTeacher from "../../pages/board-teacher.component";
// Student
import BoardUser from "../../pages/board-user.component";

/*  Create Nav */
class Nav extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showTeacherBoard: false,
      showAdminBoard: false,
      currentUser: undefined
    };
  }

  componentDidMount() {

    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser(),
        showTeacherBoard: user.roles.includes("ROLE_TEACHER"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  logOut() {
    AuthService.logout();
  }


  render() {
    const { currentUser, showTeacherBoard, showAdminBoard } = this.state;

    return (
      <Router>
        <div>
          <Navbar fixed="top" >

          <Navbar.Brand ><Link to="/" style={{ textDecoration: 'none' }}><h1 className="text-white display-3">Unlock It!</h1></Link>
          </Navbar.Brand>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                <span className="text-white"><h6>Home&emsp;</h6></span>
                </Link>
              </li>

              {showTeacherBoard && (
                <li className="nav-item">
                  <Link to="/teacher" className="nav-link">
                  <span className="text-white"><h6>Teacher&emsp;</h6></span>
                  </Link>
                </li>
              )}

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to="/admin" className="nav-link">
                  <span className="text-white"><h6>Admin&emsp;</h6></span>
                  </Link>
                </li>
              )}

              {currentUser && (
                <li className="nav-item">
                  <Link to="/user" className="nav-link">
                  <span className="text-white"><h6>Student&emsp;</h6></span>
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                  <span className="text-white"><h6>{currentUser.email}&emsp;</h6></span>
                  </Link>

                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                  <span className="text-white"><h6>Logout&emsp;</h6></span>
                  </a>
                </li>
              </div>
            ) : (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                    <span className="text-white"><h6>Login&emsp;</h6></span>
                  </Link>
                  </li>
                </div>
              )}
          </Navbar>
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/teacher" component={BoardTeacher} />
              <Route path="/admin" component={BoardAdmin} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

/*  Export Nav */
export default Nav;