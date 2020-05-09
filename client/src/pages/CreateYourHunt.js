/*  React  */
import React, { Fragment } from "react";

/* Teacher Map */
import TeacherMap from "../components/TeacherMap/TeacherMap";

/*  React Router  */
import { Link } from "react-router-dom";

/* Styling */
import "../styles/App.scss";

    function test() {
        return (
            <div className="mapWrapper">
                <TeacherMap
                    id="myMap"
                    isActive={true}
                    options={{
                        center: { lat: 0, lng: 0 },
                        zoom: 2,
                        mapTypeId: "hybrid",
                    }}
                />
            
            <Fragment><Link to="/teachercreate">Create Hunts</Link></Fragment>
            </div>
        )
    }


export default test;