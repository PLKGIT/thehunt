/*  React  */
import React, { Component } from "react";

/*  React Router  */
import { Link } from "react-router-dom";

/*  Table  */
import Table from 'react-bootstrap/Table'

function CreateGroup(){
	return(
    <div className="container">
       <h5 className="text-secondary" style={{marginRight:'90%'}}>
         
          
              <Link className="backTab" to="/teacher"style={{ textDecoration: 'none'}}><i className="fas fa-arrow-left" style={{fontSize: '16px'}}></i>Back</Link>
           
        </h5>
    <h1 className="text-center">CREATE GROUPS</h1>
		<div className="group-table">
			<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Group Name</th>
      <th>Group Level</th>
      <th>Group Subject</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
	<tr>
      <td>2</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
	<tr>
      <td>2</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</Table>
<h5 className="text-info text-center">
      <Link to="/" className="link"><img src="./images/transparentlock.gif" alt="Still Lock" width="75px"/>Unlock It Home</Link>
        </h5>
		</div>
    </div>
	)
}
export default CreateGroup;