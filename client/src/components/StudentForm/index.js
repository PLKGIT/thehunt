import React, { Component } from "react";
import Table from "react-table";
import {BootstrapTable, 
    TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

// import "react-table/react-table.css";
// Import Hamoni Sync
// import Hamoni from "hamoni-sync";

// TODO: move this to a different file and export as a separate component
class Table1 extends Component {
    render() {
      return (
        <div>
          <BootstrapTable data={this.props.data}>
            <TableHeaderColumn isKey dataField='id'>
              ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField='fname'>
              FirstName
            </TableHeaderColumn>
            <TableHeaderColumn dataField='lname'>
              LastName
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      );
    }
  }
  

class StudentForm extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      firstName: "",
      lastName: "",
      uniqueIdCounter:1,
    };
  }

  handleChange = event => {
    if (event.target.name === "firstName")
        this.setState({ firstName: event.target.value });
    if (event.target.name === "lastName")
        this.setState({ lastName: event.target.value });
  }


  handleSubmit = event => {
    this.setState({
        data: this.state.data.concat([{
            id: this.state.uniqueIdCounter, 
            fname: this.state.firstName, 
            lname: this.state.lastName
    }])});
 
    this.setState({
        firstName: "",
        lastName: "",
        uniqueIdCounter: this.state.uniqueIdCounter + 1,
    })
    event.preventDefault();

    // TODO: connect/route this to routerAPI to save this in the database

  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <h3>Add/Edit Students</h3> */}
          <label>
            FirstName:
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          {" "}
          <label>
            LastName:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          {"   "}
          <input type="submit" value="Add" />
        </form>
        <Table1 data={this.state.data}/>

        {/* <Table Responsive>
          <thead>
            <tr>
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Full Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Tabcell</td>
            </tr>
          </tbody>
        </Table> */}
      </div>
    );
  }
}
export default StudentForm;
