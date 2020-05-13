/*  React  */
import React, { Component } from 'react';

/*  React Bootstrap  */
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

/*  Import StudentForm  */
import StudentForm from '../StudentForm';

/*  Create ManageStudentTab  */
class ManageStudentTab extends Component {
    render() {
        return (
            <div id="tabWrapper">
                <Tabs eventKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Add/Edit Students">
                        <StudentForm />
                    </Tab>
                    <Tab eventKey="profile" title="Create Group">
                        <h6>Creating group...</h6>

                    </Tab>
                    <Tab eventKey="contact" title="Stats">
                        <h6>Status...</h6>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

/*  Export ManageStudentTab  */
export default ManageStudentTab;