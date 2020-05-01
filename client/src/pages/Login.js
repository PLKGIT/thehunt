/*  React  */
import React from 'react';

/*  React Bootstrap Components  */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/*  Create Login  */
function Login() {
    return (
        <div className="container">
            <Row>
                <Col>
                    <h1 className="text-center text-secondary"><img src="./images/unlock.gif" alt="Key in lock gif" width="150px" />&emsp;Login to Unlock It!</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardGroup>
                        <Card border="info" >
                            <Card.Body>
                                <Card.Title><h1 className="text-center text-info">Teachers</h1></Card.Title>
                                <Card.Text>
                                    <Form className="text-info">
                                        <Form.Group controlId="formTeacherEmail">
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />

                                        </Form.Group>

                                        <Form.Group controlId="formTeacherPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                            <Form.Text className="text-muted">
                                                Your password is case sensitive.
                                            </Form.Text>
                                        </Form.Group>
                                       <center><Button variant="warning" id="teacherSubmit" type="submit" block>
                                            Login
                                        </Button>
                                        </center> 
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="info" >
                            <Card.Body>
                                <Card.Title><h1 className="text-center text-info">Students</h1></Card.Title>
                                <Form className="text-info">
                                        <Form.Group controlId="formStudentEmail">
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group controlId="formStudentPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                            <Form.Text className="text-muted">
                                                Your password is case sensitive.
                                            </Form.Text>
                                        </Form.Group>
                                        <center><Button variant="warning" id="studentSubmit" type="submit" block>
                                            Login
                                        </Button>
                                        </center>
                                    </Form>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                <p><hr/></p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4 className="text-info">
                    <ul>
                        <li><a href={"/admin"}>Admin</a> Dashboard</li>
                        <li><a href={"/teacher"}>Teacher</a> Dashboard</li>
                        <ul>
                        <li><a href={"/teachercreate"}>Create Hunts</a></li>
                        <li><a href={"/teachermanagehunts"}>Manage Hunts</a></li>
                        <li><a href={"/teachermanagestudents"}>Manage Students</a></li>
                        </ul>
                        <li><a href={"/student"}>Student</a> Dashboard</li>
                        <ul>
                        <li><a href={"/studentplay"}>Play Hunts</a></li>
                        <li><a href={"/studenthistory"}>Hunts History</a></li>
                        </ul>
                        <li><a href={"/junk"}>404 Error Page</a></li>
                    </ul>
                    </h4>
                </Col>
            </Row>
        </div>
    )
}

/*  Export Login  */
export default Login;