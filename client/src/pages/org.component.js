import React, { Component } from "react";
import DataService from "../utils/data.service";

/*  React Bootstrap Components  */
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";

export default class Org extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);

        this.state = {
            org_name: "",
            org_city: "",
            org_state: ""
        }
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

    handleSubmit(e) {
        e.preventDefault();

        DataService.createorg(
            this.state.org_name,
            this.state.org_city,
            this.state.org_state
        )
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Text>
                    <div className="form-wrapper">
                <Form onSubmit={this.handleSubmit}>

                    <Form.Group controlId="name">
                        <Form.Label>Organization</Form.Label>
                        <Form.Control
                            type="text"
                            name="org_name"
                            placeholder="Organization Name"
                            value={this.state.org_name}
                            onChange={this.onChangeName}
                        />
                    </Form.Group>
                    <Form.Group controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            name="org_city"
                            placeholder="Organization City"
                            value={this.state.org_city}
                            onChange={this.onChangeCity}
                        />
                    </Form.Group>

                    <Form.Group controlId="state">
                        <Form.Label>State</Form.Label>
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

                </Form >
            </div >
                    </Card.Text>
                </Card.Body>
            </Card>
            
        );
    }
}