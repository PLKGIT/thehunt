/*  React  */
import React from "react";

/*  React Router  */
import {Link} from "react-router-dom";

/*  Create NotFound  */
function NotFound() {
  return (
    <div className="container">
      <br />
      <h2 className="text-center text-danger">Sorry, We Could Not Find That!</h2>
      <center><img src="images/404.png" width="200px" alt="404" /></center>
      <h3 className="text-center"><Link to="/">/Unlock It Home</Link></h3>
      <br />
    </div>
  );
}

/*  Export NotFound  */
export default NotFound;