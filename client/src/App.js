/*  React  */
import React, { Component } from "react";

/*  React Router  */
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

/*  Authorization Service  */
import AuthService from "./services/auth.service";

import Login from "./pages/login.component";
import Register from "./pages/register.component";
import Home from "./pages/home.component";
import Profile from "./pages/profile.component";
import BoardUser from "./pages/board-user.component";
import BoardTeacher from "./pages/board-teacher.component";
import BoardAdmin from "./pages/board-admin.component";

/*  Pages  */
import TeacherCreate from "./pages/TeacherCreate";
import TeacherManageHunts from "./pages/TeacherManageHunts";
import TeacherManageStudents from "./pages/TeacherManageStudents";
import EditHunt from "./pages/EditHunt"
import CreateYourHunt from "./pages/CreateYourHunt";
import StudentPlay from "./pages/StudentPlay";
import StudentHistory from "./pages/StudentHistory";
import NotFound from "./pages/NotFound";

/*  Components  */
// import Nav from "./components/Nav";
import Footer from "./components/Footer";

/*  React Bootstrap Components  */
import Nav from 'react-bootstrap/Nav';

/*  Create App  */
class App extends Component {
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
          <Nav className="navbar navbar-expand navbar-dark bg-primary">
            <Link to={"/"} className="navbar-brand">
              <span className="text-white"><h6>Unlock It!&emsp;</h6></span>
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  <span className="text-white"><h6>Home&emsp;</h6></span>
                </Link>
              </li>

              {showTeacherBoard && (
                <li className="nav-item">
                  <Link to={"/teacher"} className="nav-link">
                    <span className="text-white"><h6>Teachers&emsp;</h6></span>
                  </Link>
                </li>
              )}

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    <span className="text-white"><h6>Admins&emsp;</h6></span>
                  </Link>
                </li>
              )}

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    <span className="text-white"><h6>Students&emsp;</h6></span>
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    <span className="text-white"><h6>{currentUser.email}&emsp;</h6></span>

                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    <span className="text-white"><h6>LogOut&emsp;</h6></span>
                  </a>
                </li>
              </div>
            ) : (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      <span className="text-white"><h6>Login&emsp;</h6></span>
                    </Link>
                  </li>
                </div>
              )}
          </Nav>
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/user" component={BoardUser} />
              <Route exact path="/studentplay" component={StudentPlay} />
              <Route exact path="/studenthistory" component={StudentHistory} />
              <Route exact path="/teacher" component={BoardTeacher} />
              <Route exact path="/teachercreate" component={TeacherCreate} />
              <Route exact path="/teachermanagehunts" component={TeacherManageHunts} />
              <Route exact path="/teachermanagestudents" component={TeacherManageStudents} />
              <Route exact path="/edithunt" component={EditHunt} />
              <Route exact path="/createyourhunt" component={CreateYourHunt} />
              <Route exact path="/admin" component={BoardAdmin} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

/*  Export App  */
export default App;