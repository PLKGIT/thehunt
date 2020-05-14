/*  React  */
import React, { Component } from "react";

/*  Axios Calls  */
import DataService from "../utils/data.service";

/*  Create HuntsAll  */
class HuntsAll extends Component {
    state = {
        hunt_id: "",
        title: "",
        category: "",
        description: "",
        image_url: "",
        teacher_id: "",
        data1: [],
        datafirst: [],
    };

    componentDidMount() {
        DataService.getHuntDetails().then((data) => {
            this.setState({
                data1: data,
            });
        });
    }

    componentDidChange() {
        DataService.getHuntDetails().then((data) => {
            this.setState({
                data1: data,
            });
        });
    }

    render() {
        return (
            <div className="container" >
                <div className="row">
                    <h2>Hunts History</h2>
                </div>


                <div className="row justify-content-center">
                    <div className="col-auto">
                        <table className="table-bordered">
                            <tbody>
                                    <tr>
                                        <th>
                                            <b>#</b>
                                        </th>
                                        <th>
                                            <b>Hunt Id</b>
                                        </th>
                                        <th>
                                            <b>Title</b>
                                        </th>
                                        <th>
                                            <b>Category</b>
                                        </th>
                                        <th>
                                            <b>Description</b>
                                        </th>
                                        <th>
                                            <b>Image</b>
                                        </th>
                                        {/* <th>
                                        <b>Teacher Id</b>
                                    </th> */}
                                    </tr>
                                {this.state.data1.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item._id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.category}</td>
                                        <td>{item.description}</td>
                                        <td><img src={item.image_url} width="100px" /></td>
                                        {/* <td>{item.teacher_id}</td> */}
                                        <td>
                                        </td>
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

/*  Export HuntsAll  */
export default HuntsAll;