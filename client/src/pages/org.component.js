/*  React  */
import React, { Component } from "react";

/*  Axios Calls  */
import DataService from "../utils/data.service";

/*  React Bootstrap  */
import Form from 'react-bootstrap/Form';

/*  Create and Export Org  */
export default class Org extends Component {
    constructor(props) {
        super(props);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);

        this.state = {
            id: "",
            org_name: "",
            org_city: "",
            org_state: ""
        }
    }
    componentDidMount() {
        DataService.getOrgDetails()
            .then((data) => {
                console.log(data[0]._id)
                console.log(data[0].org_name)
                console.log(data[0].org_city)
                console.log(data[0].org_state)
                this.setState({
                    id: data[0]._id,
                    org_name: data[0].org_name,
                    org_city: data[0].org_city,
                    org_state: data[0].org_state
                })
            })
    }

    componentDidUpdate() {
        DataService.getOrgDetails()
            .then((data) => {
                console.log(data[0]._id)
                console.log(data[0].org_name)
                console.log(data[0].org_city)
                console.log(data[0].org_state)
                this.setState({
                    id: data[0]._id,
                    org_name: data[0].org_name,
                    org_city: data[0].org_city,
                    org_state: data[0].org_state
                })
            })
    }


    onChangeName(e) {
        this.setState({
            org_name: e.target.value
        });
    }

    onChangeCity(e) {
        this.setState({
            org_city: e.target.value
        });
    }

    onChangeState(e) {
        this.setState({
            org_state: e.target.value
        });
    }

    handleUpdate(e) {
        e.preventDefault();

        DataService.updateOrg(
            this.state.id,
            this.state.org_name,
            this.state.org_city,
            this.state.org_state
        )
    }

    handleRemove(e) {
        e.preventDefault();

        DataService.removeOrg(
            this.state.id
        )
    }

    handleCreate(e) {
        e.preventDefault();

        DataService.createOrg(
            this.state.org_name,
            this.state.org_city,
            this.state.org_state
        )
    }

    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.handleUpdate}>
                    <Form.Group controlId="name">
                        <Form.Label className="text-white">Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="org_name"
                            placeholder="Organization Name"
                            value={this.state.org_name}
                            onChange={this.onChangeName}
                        />
                    </Form.Group>
                    <Form.Group controlId="city">
                        <Form.Label className="text-white">City</Form.Label>
                        <Form.Control
                            type="text"
                            name="org_city"
                            placeholder="Organization City"
                            value={this.state.org_city}
                            onChange={this.onChangeCity}
                        />
                    </Form.Group>

                    <Form.Group controlId="state">
                        <Form.Label className="text-white">State</Form.Label>
                        <Form.Control
                            type="text"
                            name="org_state"
                            placeholder="Organization State"
                            value={this.state.org_state}
                            onChange={this.onChangeState}
                        />
                    </Form.Group>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block">Update Org</button>
                    </div>
                    {/* <div className="form-group">
                        <button className="btn btn-primary btn-block">Remove Org</button>
                    </div> */}
                    {/* <div className="form-group">
                        <button className="btn btn-primary btn-block">Create Org</button>
                    </div> */}
                </Form >
            </div >
        );
    }
}