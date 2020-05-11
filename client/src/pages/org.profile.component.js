/*  React  */
import React, { Component } from "react";
import DataService from "../utils/data.service"

/*  React Bootstrap Components  */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default class OrgProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orgDetails: ""
        };
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
                                        {/* {orgDetails.org_name} */}
                                    </p>
                                    <p>
                                        <strong>City:</strong>{" "}
                                        {/* {orgDetails.org_city} */}
                                    </p>
                                    <p>
                                        <strong>State</strong>{" "}
                                        {/* {orgDetails.org_state} */}
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