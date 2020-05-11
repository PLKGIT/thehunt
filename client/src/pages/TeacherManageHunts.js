/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Axios from 'axios';

/*  Create TeacherManageHunts  */
class TeacherManageHunts extends Component {
  state = {
    clues: []
  }

  componentDidMount() {
    var self = this;
    Axios.get("/api/clues")
    .then(function(data) {
      console.log(data.data)
      self.setState({clues: data.data})
      console.log("DATA FROM TEACHER MANAGE HUNTS!!--------------------")
      console.log(self.state.clues)
    });
    console.log("CLUES-------------------------------------------")
    console.log(this.state.clues)
  }

  render() {

    return (
      <div className="container">
        <br />
        <h1 className="text-center text-secondary">MANAGE HUNTS</h1>
        <h5 className="text-secondary">
          NAVIGATION
        <ul>
            <li><Link to="/teacher">Teacher Dashboard</Link></li>
          </ul>
        </h5>
        <h5 className="text-info">
          Hunt title, Description, Category
          <Table striped bordered hover variant="primary">
            <thead>
              <tr>
                <th></th>
                <th>Clue</th>
                <th>Answer</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>




          {/* <ul>
            <li>All Created Hunts - sorted by pending, active, complete</li>
            <li>Hunt Reports</li>
          </ul> */}
        </h5>
        <h5 className="text-info text-center">
          <Link to="/"><img src="./images/transparentlock.gif" alt="Still Lock" width="75px" />Unlock It Home</Link>
        </h5>
        <br />
      </div>
    );
  }
}

/*  Export TeacherManageHunts  */
export default TeacherManageHunts;