/*  React  */
import React from 'react';

/*  React Router  */
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

/*  Pages  */
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Teacher from "./pages/Teacher";
import TeacherCreate from "./pages/TeacherCreate";
import TeacherManageHunts from "./pages/TeacherManageHunts";
import TeacherManageStudents from "./pages/TeacherManageStudents";
import Student from "./pages/Student";
import StudentPlay from "./pages/StudentPlay";
import StudentHistory from "./pages/StudentHistory";
import NotFound from "./pages/NotFound";

/*  Components  */
import Nav from "./components/Nav";
import Footer from "./components/Footer";

/*  Create App  */
function App() {
  return (
    <Router>
    <div>
      <Nav fixed="top"/>
      <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/teacher" component={Teacher} />
          <Route exact path="/teachercreate" component={TeacherCreate} />
          <Route exact path="/teachermanagehunts" component={TeacherManageHunts} />
          <Route exact path="/teachermanagestudents" component={TeacherManageStudents} />
          <Route exact path="/student" component={Student} />
          <Route exact path="/studentplay" component={StudentPlay} />
          <Route exact path="/studenthistory" component={StudentHistory} />
          <Route component={NotFound} />
      </Switch>
      <Footer fixed="bottom"/>
    </div>
    </Router>
  );
}

/*  Export App  */
export default App;