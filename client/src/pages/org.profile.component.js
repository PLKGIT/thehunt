/*  React  */
import React, { Component } from "react";
import DataService from "../utils/data.service"

/*  React Bootstrap Components  */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default class OrgProfile extends Component {

    state = {
        org_name: "",
        org_city: "",
        org_state: ""
    };

    componentDidMount(){
        DataService.getOrgDetails()
        .then((data)=> {
            console.log(data[0]._id)
            console.log(data[0].org_name)
            console.log(data[0].org_city)
            console.log(data[0].org_state)
            this.setState({
                org_name: data[0].org_name,
                org_city: data[0].org_city,
                org_state: data[0].org_state
            })
        })
    }

    render() {

        return (
            <div className="container">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <p>
                                        <strong>Organization:</strong>{" "}
                                        {this.state.org_name}
                                    </p>
                                    <p>
                                        <strong>City:</strong>{" "}
                                        {this.state.org_city}
                                    </p>
                                    <p>
                                        <strong>State</strong>{" "}
                                        {this.state.org_state}
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>


                    </Col>
                </Row>


            </div>
        );
    }
}