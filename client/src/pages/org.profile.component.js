/*  React  */
import React, { Component } from "react";

/*  Axios Calls  */
import DataService from "../utils/data.service"

/*  React Bootstrap Components  */
import Card from 'react-bootstrap/Card';

/*  Create and Export OrgProfile  */
export default class OrgProfile extends Component {

    state = {
        org_name: "",
        org_city: "",
        org_state: ""
    };

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

    render() {

        return (
            <div className="container">
                <Card>
                    <Card.Body>
                    <h4>
                        <strong>{this.state.org_name}</strong>
                    </h4>
                    <h5>
                        {this.state.org_city}{", "}{this.state.org_state}
                    </h5>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}