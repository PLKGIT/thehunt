import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StudentForm from '../StudentForm';



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

export default ManageStudentTab;