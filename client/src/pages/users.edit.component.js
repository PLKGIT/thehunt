/*  React  */
import React, { Component } from "react";

/*  Axios Calls  */
import DataService from "../utils/data.service";

/*  Create UserAll  */
class UserAll extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    status: "",
    roles: [],
    id: "",
    data1: [],
    datafirst: []
  };

  componentDidMount() {
    DataService.getUserDetails().then((data) => {
      console.log("-----Data in getUserDetails-----");
      console.log(data);
      this.setState({
        data1: data,
      });
    });
  }

  componentDidUpdate() {
    DataService.getUserDetails().then((data) => {
      console.log("-----Data in getUserDetails-----");
      console.log(data);
      this.setState({
        data1: data,
      });
    });
  }

  render() {
    return (
      <div className="container" >
                <div className="row">
                    <h2>Lock It! Users</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <table className="table-bordered">
                            <tbody>
                   <tr>
                    <th>
                      <b>Id</b>
                    </th>
                    <th>
                      <b>First</b>
                    </th>
                    <th>
                      <b>Last</b>
                    </th>
                    <th>
                      <b>Email</b>
                    </th>
                    <th>
                      <b>Status</b>
                    </th>
                    <th>
                      <b>Roles</b>
                    </th>
                    <th>
                      <b>Edit</b>
                    </th>
                    <th>
                      <b>Delete</b>
                    </th>
                  </tr>
                                {this.state.data1.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.email}</td>
                      <td>{item.status}</td>
                      <td>{item.roles}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
/*  Export UserAll  */
export default UserAll;