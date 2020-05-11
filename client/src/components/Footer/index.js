/*  React  */
import React from 'react';

/*  App SCSS  */
import "../../styles/App.scss";

import Navbar from 'react-bootstrap/Navbar'

/*  Create Footer */
function Footer() {
    return (
        <div class ="footer">
        <Navbar sticky="bottom" >
            <p className="text-center py-1">&copy; Copyright 2020 All rights reserved.<br/>
            Sonal Bhoraniya, Jyoschsna Gongal, Pam Kelly, Hebah Memon, and Nida Memon</p>
        </Navbar>
        </div>
    )
}
/*  Export Footer */
export default Footer;