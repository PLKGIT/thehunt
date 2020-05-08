/*  React  */
import React, { Component } from 'react';

/*  React Router  */
import { Link } from "react-router-dom";

/* Styling */
import "./style.scss";


class Carousel extends Component {
    state = {

    }

    // componentDidMount() {

    //     const script = document.createElement("script");

    //     script.src = "/carousel.js";
    //     script.async = true;

    //     document.body.appendChild(script);
    // }

    componentDidMount() {
        var carousels = document.querySelectorAll('.carousel');

        


        const carousel = (root) => {
            var
                figure = root.querySelector('figure'),
                nav = root.querySelector('nav'),
                images = figure.children,
                n = images.length,
                gap = root.dataset.gap || 0,
                bfc = 'bfc' in root.dataset,

                theta = 2 * Math.PI / n,
                currImage = 0;

            setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
            window.addEventListener('resize', () => {
                setupCarousel(n, parseFloat(getComputedStyle(images[0]).width))
            });

            setupNavigation();

            function setupCarousel(n, s) {
                var apothem = s / (2 * Math.tan(Math.PI / n));

                figure.style.transformOrigin = `50% 50% ${- apothem}px`;

                for (var i = 0; i < n; i++)
                    images[i].style.padding = `${gap}px`;
                for (i = 1; i < n; i++) {
                    images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
                    images[i].style.transform = `rotateY(${i * theta}rad)`;
                }
                if (bfc)
                    for (i = 0; i < n; i++)
                        images[i].style.backfaceVisibility = 'hidden';

                rotateCarousel(currImage);
            }

            function setupNavigation() {
                nav.addEventListener('click', onClick, true);

                function onClick(e) {
                    e.stopPropagation();

                    var t = e.target;
                    if (t.tagName.toUpperCase() !== 'BUTTON')
                        return;

                    if (t.classList.contains('next')) {
                        currImage++;
                    }
                    else {
                        currImage--;
                    }

                    rotateCarousel(currImage);
                }

            }

            function rotateCarousel(imageIndex) {
                figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
            }
        };

        for (var i = 0; i < carousels.length; i++) {
            carousel(carousels[i]);
        }

    }

    render() {

        return (
            <div className="carousel">
                <figure>
                    <Link className="link" to="/studentplay"><img src="/images/animals.png" alt="animals" /><h3>Animals</h3></Link>
                    <Link className="link" to="/studentplay"><img src="/images/world.png" alt="world" /><h3>Landmarks</h3></Link>
                    <Link className="link" to="/studentplay"><img src="/images/inventor.png" alt="inventor" /><h3>Inventors</h3></Link>
                    <Link className="link" to="/studentplay"><img src="/images/hunt.png" alt="coming soon" /><h3>Coming Soon</h3></Link>
                    <Link className="link" to="/studentplay"><img src="/images/bulb.png" alt="bulb" /><h3>Inventors</h3></Link>
                    <Link className="link" to="/studentplay"><img src="/images/hunt2.png" alt="coming soon" /><h3>Coming Soon</h3></Link>
                    <Link className="link" to="/studentplay"><img src="/images/geography.png" alt="geography" /><h3>Geography</h3></Link>
                </figure>
                <nav>
                    <button className="nav prev">&#60; Prev</button>
                    <button className="nav next">Next &#62;</button>
                </nav>
            </div>
        )
    }

}
export default Carousel;