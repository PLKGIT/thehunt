/*  React  */
import React from "react";

/*  Register Component  */
import Register from "../../pages/register.component";

/*  Org Components  */
import Org from "../../pages/org.component";
import OrgProfile from "../../pages/org.profile.component";

/*  User Components  */
import Users from "../../pages/users.edit.component";

/*  React Bootstrap  */
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/*  Create AdminComponents  */
class AdminComponents extends React.Component {
  render() {
    return (
      <div className="tabWrapper" >
        <Tabs eventKey="home" id="admintabbed">
          <Tab className="text-black" eventKey="home" title="Register Users" >
            <Register />
          </Tab>
          <Tab className="text-black" eventKey="profile" title="Edit Users">
            <Users/>
          </Tab>
          <Tab className="text-black" eventKey="contact" title="Edit Org">
            <Row></Row>
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

/*  Export AdminComponents  */
export default AdminComponents;