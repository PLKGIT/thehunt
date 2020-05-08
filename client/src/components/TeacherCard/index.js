/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";

/* Styling */
import "./style.scss";


class TeacherCard extends Component {
    render() {
        return (
            <div class="card-container">
                <div class="card">
                    <div class="card-count-container">
                        <div class="card-count">Create Hunt</div>
                    </div>

                    <div class="card-content">
                    <Link to="/teachercreate"><h4>Click here to create hunt</h4></Link>
          </div>

                    <div class="card-footer">
                        Lorem ipsum dolor sit amet.
          </div>
                </div>

                <div class="card">
                    <div class="card-count-container">
                        <div class="card-count">Manage Hunt</div>
                    </div>
                    <div class="card-content">
                    <Link to="/teachermanagehunts"> <h4>Click here to manage hunt</h4></Link>
            
          </div>

                    <div class="card-footer">
                        Lorem ipsum dolor sit amet.
          </div>
                </div>

                <div class="card">
                    <div class="card-count-container">
                        <div class="card-count">Manage Students</div>
                    </div>
                    <div class="card-content">
                    <Link to="/teachermanagestudents"><h4>Click here to manage students</h4></Link>
          </div>

                    <div class="card-footer">
                        Lorem ipsum dolor sit amet.
          </div>
                </div>
            </div>
        )
    }
}

export default TeacherCard;