/*  React  */
import React, { Component } from "react";

/*  React Router  */
import { Link } from "react-router-dom";

/*Table */
import Table from 'react-bootstrap/Table'

function CreateGroup(){
	return(
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
		</div>
	)
}
export default CreateGroup;
