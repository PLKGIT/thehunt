import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import "./App.css";

/*  Pages from Authentication  */
import Login from "./pages/login.component";
import Home from "./pages/home.component";
import Profile from "./pages/profile.component";

/*  Pages  */
// Admin
import BoardAdmin from "./pages/board-admin.component";
// Teacher
import BoardTeacher from "./pages/board-teacher.component";
import TeacherCreate from "./pages/TeacherCreate";
import TeacherManageHunts from "./pages/TeacherManageHunts";
import TeacherManageStudents from "./pages/TeacherManageStudents";
import EditHunt from "./pages/EditHunt"
import CreateYourHunt from "./pages/CreateYourHunt";
// Student
import BoardUser from "./pages/board-user.component";
import StudentPlay from "./pages/StudentPlay";
import StudentHistory from "./pages/StudentHistory";

/*  Components  from the Team*/
import Nav from "./components/Nav";
import Footer from "./components/Footer";

/*  Create App  */
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="container mt-3">
          <Switch>
            {/* <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} /> */}
            {/* <Route path="/admin" component={BoardAdmin} />
            <Route path="/teacher" component={BoardTeacher} /> */}
            <Route exact path="/teachercreate" component={TeacherCreate} />
            <Route exact path="/teachermanagehunts" component={TeacherManageHunts} />
            <Route exact path="/teachermanagestudents" component={TeacherManageStudents} />
            <Route exact path="/edithunt" component={EditHunt} />
            <Route exact path="/createyourhunt" component={CreateYourHunt} />
            {/* <Route path="/user" component={BoardUser} /> */}
            <Route exact path="/studentplay" component={StudentPlay} />
            <Route exact path="/studenthistory" component={StudentHistory} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

/*  Export App  */
export default App;