/*  React  */
import React from "react";

/*  Register Component  */
import Register from "../../pages/register.component";

/*  Org Component  */
import Org from "../../pages/org.component";
import OrgProfile from "../../pages/org.profile.component";

/*  Tabs  */
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AdminComponents extends React.Component {
  render() {
    return (
      <div id="tabWrapper">
        <Tabs eventKey="home" id="admintabbed">
          <Tab eventKey="home" title="Register Users">
            <Register />
          </Tab>
          <Tab eventKey="profile" title="Edit Users">
            <h6>Edit Users</h6>
          </Tab>
          <Tab eventKey="contact" title="Edit Org">
            <Row>
              <Col>
              <OrgProfile />
              </Col>
              <Col>
              <Org />
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default AdminComponents;