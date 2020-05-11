/*  React  */
import React from "react";

/*  Authorization Service  */
import AuthService from "../../services/auth.service";

/*  Register Component  */
import Register from "../../pages/register.component";

/*  Tabs  */
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContainer from 'react-bootstrap/TabContainer';

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
            <h6>Edit Organization</h6>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default AdminComponents;