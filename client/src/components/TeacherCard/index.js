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
                <Link to="/teachercreate" style={{ textDecoration: 'none' }}> <div class="card-count-container">
                <Link to="/teachercreate" style={{ textDecoration: 'none' }}> <div class="card-count">Create Hunt</div></Link>
                    </div></Link>

                    <div class="card-content">
                    <Link to="/teachercreate" style={{ textDecoration: 'none' }}> <i class="fas fa-tools"></i></Link>
                    
          </div>

          <Link to="/teachercreate" style={{ textDecoration: 'none' }}><div class="card-footer">
          Design your own hunt from scratch or editing an existing one!
                    </div></Link>
                </div> 
               

                <div class="card">
                <Link to="/teachermanagehunts"style={{ textDecoration: 'none' }}> <div class="card-count-container">
                    <Link to="/teachermanagehunts"style={{ textDecoration: 'none' }}> <div class="card-count">Manage Hunt</div></Link>
                    </div></Link>
                    <div class="card-content">
                    <Link to="/teachermanagehunts"style={{ textDecoration: 'none' }}> <i class="fas fa-search"></i></Link>
            
          </div>

          <Link to="/teachermanagehunts"style={{ textDecoration: 'none' ,lineHeight:'3em'}}><div class="card-footer">
                   View and manage your hunts.
          </div></Link>
                </div>

                <div class="card">
                <Link to="/teachermanagestudents" style={{ textDecoration: 'none' }}>  <div class="card-count-container">
                    <Link to="/teachermanagestudents" style={{ textDecoration: 'none' }}><div class="card-count">Manage Students</div></Link>
                    </div></Link>
                    <div class="card-content">
                    <Link to="/teachermanagestudents" style={{ textDecoration: 'none' }}>  <i class="fas fa-user-friends"></i></Link>
          </div>

          <Link to="/teachermanagestudents" style={{ textDecoration: 'none', lineHeight:'3em'}}>  <div class="card-footer">
                        View and manage student progress.
          </div></Link>
                </div>

                <div class="card">
                <Link to="/teachercreategroup" style={{ textDecoration: 'none' }}>  <div class="card-count-container">
                    <Link to="/teachercreategroup" style={{ textDecoration: 'none' }}><div class="card-count">Create Groups</div></Link>
                    </div></Link>
                    <div class="card-content">
                    <Link to="/teachercreategroup" style={{ textDecoration: 'none' }}>  <i class="fas fa-user-friends"></i></Link>
          </div>

          <Link to="/teachercreategroup" style={{ textDecoration: 'none', lineHeight:'3em'}}>  <div class="card-footer">
                        Create a group for students.
          </div></Link>
                </div>
            </div>
        )
    }
}

export default TeacherCard;