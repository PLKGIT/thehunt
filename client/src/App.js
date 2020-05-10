import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import "./App.css";



/*  Pages from the Team  */
import Admin from "./pages/Admin";
import Teacher from "./pages/Teacher";
import TeacherCreate from "./pages/TeacherCreate";
import TeacherManageHunts from "./pages/TeacherManageHunts";
import TeacherManageStudents from "./pages/TeacherManageStudents";
import Student from "./pages/Student";
import StudentPlay from "./pages/StudentPlay";
import StudentHistory from "./pages/StudentHistory";
import EditHunt from "./pages/EditHunt"
import CreateYourHunt from "./pages/CreateYourHunt";

/*  Components  from the Team*/
import Nav from "./components/Nav";
import Footer from "./components/Footer";

/*  Pages from Authentication  */
import Login from "./pages/login.component";
import Register from "./pages/register.component";
import Home from "./pages/home.component";
import Profile from "./pages/profile.component";
import BoardUser from "./pages/board-user.component";
import BoardTeacher from "./pages/board-teacher.component";
import BoardAdmin from "./pages/board-admin.component";

/*  Create App  */
function App() {
  return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/teacher" component={Teacher} />
            <Route exact path="/teachercreate" component={TeacherCreate} />
            <Route exact path="/teachermanagehunts" component={TeacherManageHunts} />
            <Route exact path="/teachermanagestudents" component={TeacherManageStudents} />
            <Route exact path="/student" component={Student} />
            <Route exact path="/studentplay" component={StudentPlay} />
            <Route exact path="/studenthistory" component={StudentHistory} />
            <Route exact path="/edithunt" component={EditHunt} />
            <Route exact path="/createyourhunt" component={CreateYourHunt} />
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

/*  Export App  */
export default App;


