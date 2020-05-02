import React, { Component } from 'react';
import "./style.scss";

class Carousel extends Component {
    state = {

    }

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "../carousel.js";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        return (
            <div className="carousel">
                <figure>
                    <img src="../images/animals.png" alt="" />
                    <img src="../images/world.png" alt="" />
                    <img src="../images/inventor.png" alt="" />
                    <img src="../images/comingsoon.png" alt="" />
                    <img src="../images/bulb.png" alt="" />
                    <img src="../images/comingsoon2.png" alt="" />
                    <img src="../images/geography.png" alt="" />

                </figure>
                <nav>
                    <button class="nav prev">&#60; Prev</button>
                    <button class="nav next">Next &#62;</button>
                </nav>
            </div>
        )
    }
}

export default Carousel;