/*  React  */
import React from "react";

/*  Create NotFound  */
function NotFound() {
  return (
    <div className="container">
      <br />
      <h2 className="text-center text-danger">Sorry, We Could Not Find That!</h2>
      <center><img src="images/404.png" width="200px" alt="404" /></center>
      <h3 className="text-center"><a href={"/"}>/Unlock It Home</a></h3>
      <br />
    </div>
  );
}

/*  Export NotFound  */
export default NotFound;