import React from 'react'

import Accordion from 'react-bootstrap/Accordion';
import { Button, Card } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function AdminComponents() {
  return (
    <div id="tabWrapper">
      <Tabs eventKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Add/Edit Org">
        </Tab>
        <Tab eventKey="profile" title="Add/Edit Teacher">
          <h6>Creating group...</h6>

        </Tab>
        <Tab eventKey="contact" title="Add/Edit Students">
          <h6>Status...</h6>
        </Tab>
      </Tabs>
    </div>
  )
}

export default AdminComponents;
