/*  React  */
import React from 'react';

/*  React Router  */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* JWT  */
// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";
// import { setCurrentUser, logoutUser } from "./actions/authActions";

/*  Redux  */
// import { Provider } from "react-redux";
// import store from "./store";

/*  Pages  */
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Teacher from "./pages/Teacher";
import TeacherCreate from "./pages/TeacherCreate";
import TeacherManageHunts from "./pages/TeacherManageHunts";
import TeacherManageStudents from "./pages/TeacherManageStudents";
import Student from "./pages/Student";
import StudentPlay from "./pages/StudentPlay";
import StudentHistory from "./pages/StudentHistory";
import NotFound from "./pages/NotFound";

/*  Auth Pages and Components  */
// import Login from "./components/Auth/Login";
// import Register from "./components/Auth/Register";
// import Dashboard from "./components/Dashboard/index";

/*  Components  */
import Nav from "./components/Nav";
import Footer from "./components/Footer";

/*  Route  */
// import PrivateRoute from "./components/private-route/PrivateRoute";

// Check for token to keep user logged in
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
//   // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());
//     // Redirect to login
//     window.location.href = "./login";
//   }
// }

/*  Create App  */
function App() {
  return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
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
          <Footer />
        </div>
      </Router>
  );
}

/*  Create App  */
// function App() {
//   return (
//     <div>
//         <Nav />
//         <Login />
//         <Footer />
//       </div>
//   );
// }

/*  Export App  */
export default App;