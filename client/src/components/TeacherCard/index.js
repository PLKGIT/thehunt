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
          Design a hunt or edit an existing one.
                    </div></Link>
                </div> 
               

                <div class="card">
                <Link to="/teachermanagehunts"style={{ textDecoration: 'none' }}> <div class="card-count-container">
                    <Link to="/teachermanagehunts"style={{ textDecoration: 'none' }}> <div class="card-count">Manage Hunt</div></Link>
                    </div></Link>
                    <div class="card-content">
                    <Link to="/teachermanagehunts"style={{ textDecoration: 'none' }}> <i class="fas fa-search"></i></Link>
            
          </div>

          <Link to="/teachermanagehunts"style={{ textDecoration: 'none' }}><div class="card-footer">
                   View and manage your hunts.
          </div></Link>
                </div>

                <div class="card">
                <Link to="#" style={{ textDecoration: 'none' }}>  <div class="card-count-container">
                    <Link to="#" style={{ textDecoration: 'none' }}><div class="card-count">Manage Students</div></Link>
                    </div></Link>
                    <div class="card-content">
                    <Link to="#" style={{ textDecoration: 'none' }}>  <i class="fas fa-user-friends"></i></Link>
          </div>

          <Link to="#" style={{ textDecoration: 'none'}}>  <div class="card-footer">
                        View and manage student progress - Coming Soon!
          </div></Link>
                </div>

                <div class="card">
                <Link to="/teachercreategroup" style={{ textDecoration: 'none' }}>  <div class="card-count-container">
                    <Link to="/teachercreategroup" style={{ textDecoration: 'none' }}><div class="card-count">Create Groups</div></Link>
                    </div></Link>
                    <div class="card-content">
                    <Link to="/teachercreategroup" style={{ textDecoration: 'none' }}>  <i class="fas fa-user-friends"></i></Link>
          </div>

          <Link to="/teachercreategroup" style={{ textDecoration: 'none'}}>  <div class="card-footer">
                         Create a new group for students.
          </div></Link>
                </div>
            </div>
        )
    }
}

export default TeacherCard;