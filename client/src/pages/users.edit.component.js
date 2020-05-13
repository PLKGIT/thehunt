/*  React  */
import React, { Component } from "react";
/*  React Bootstrap Components  */
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

/*  Axios Calls  */
import DataService from "../utils/data.service";

class UserAll extends Component {
  state = {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    status: "",
    roles: [],
    id: "",
    Buttontxt: "Save",
    data1: [],
    datafirst: [],
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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDelete = (e) => {
    let id = "";
    let userDelete = {
      id: id,
    };
    DataService.getUserDelete(id).then((data) => {
      console.log("-----Data in getUserDetails-----");
      console.log(data);
      this.setState({
        data1: data,
      });
    });
  };

  handleUpdate = (item) => {
    this.setState({
      username: item.username,
      first_name: item.first_name,
      last_name: item.last_name,
      email: item.email,
      status: item.status,
      roles: item.roles,
      id: item._id,
      Buttontxt: "Update",
    });
  };

  handleClick = (e) => {
    e.preventDefault();

    let Url = "/userupdate";
    let userdata = {
      username: this.state.username,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      status: this.state.status,
      roles: this.state.roles,
      id: this.state.id,
    };
  };

  render() {
    return (
      <div className="container" >
        <div className="row">
          <div className="col-md-6">
            <p
              className="text"
              style={{ fontSize: "25px" , marginLeft:"80px", marginTop:"20px"}}
            >
              <b>Edit Users</b>
            </p>
            <form>
              {/* <div className="col-sm-12 col-md-12" style={{ marginLeft: '400px' }}> */}
              <table className="table-bordered">
                <tbody>
                  <tr>
                    <td>
                      <b>Username</b>
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.username}
                        name="username"
                        onChange={this.handleChange}
                      />
                      <input type="hidden" value={this.state.id} name="id" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>First</b>
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.first_name}
                        name="first_name"
                        onChange={this.handleChange}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>Last</b>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.last_name}
                        name="last_name"
                        onChange={this.handleChange}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>Email</b>
                    </td>
                    <td>
                      <input
                        type="email"
                        className="form-control"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChange}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>Status</b>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.status}
                        name="status"
                        onChange={this.handleChange}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>Roles</b>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.roles}
                        name="roles"
                        onChange={this.handleChange}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <input
                        className="btn btn-primary"
                        type="button"
                        value={this.state.Buttontxt}
                        onClick={this.handleClick}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* </div> */}
            </form>
          </div>
          {/* <div className="col-sm-12 col-md-12 " style={{ marginTop: '50px', marginLeft: '300px' }} > */}
          <div className="col-md-6" style={{marginTop:"80px"}}>
            <form>
              <table className="table-bordered">
                <tbody>
                  <tr>
                    <th>
                      <b>Id</b>
                    </th>
                    <th>
                      <b>Username</b>
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
                      <td>{item.username}</td>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.email}</td>
                      <td>{item.status}</td>
                      <td>{item.roles}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={(e) => {
                            this.EditData(item);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-info"
                          onClick={(e) => {
                            this.DeleteData(item._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

/*  Export Student  */
export default UserAll;
