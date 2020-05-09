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
          <Link className="link" to="/createyourhunt"><img src="/images/hunt.png" alt="coming soon" /><h3>Create Your Own Hunt</h3></Link>
          <Link className="link" to="/studentplay"><img src="/images/animals.png" alt="animals" /><h3>Animals</h3></Link>
          <Link className="link" to="/studentplay"><img src="/images/world.png" alt="world" /><h3>Landmarks</h3></Link>
          <Link className="link" to="/studentplay"><img src="/images/inventor.png" alt="inventor" /><h3>Inventors</h3></Link>
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




// import React, { Component, Fragment } from "react";

// import { Button } from 'react-bootstrap'

// /*  React Router  */
// import { Link } from "react-router-dom";

// import TeacherMap from "../TeacherMap/TeacherMap";

// /* Styling */
// import "./style.scss";

// class CreateHuntCard extends Component {

//   state = {
//     showCreateFromScratchForm: true
//   };

//   handleClick = event => {
//     //alert("card scratch create....")
//     this.setState({showCreateFromScratchForm: true});
//     //this.forceUpdate();
//   }

//   render() {
//     return (
//       <Fragment>
//         <div class="card-container">
//           <div class="card">
//             <div class="card-count-container">
//               <div class="card-count">Create From Scratch</div>
//             </div>

//             <div class="card-content">

//               <Button variant="none" onClick={this.handleClick}>Click here to create From scratch</Button>
//             </div>

//             <div class="card-footer">Lorem ipsum dolor sit amet.</div>
//           </div>

//           <div class="card">
//             <div class="card-count-container">
//               <div class="card-count">Choose from existing one</div>
//             </div>
//             <div class="card-content">
//             <Button variant="none">Click here to Choose from existing one</Button>
//               {/* <Link to="/teachermanagestudents">
//                 <h4>Click here to Choose from existing one</h4>
//               </Link> */}
//             </div>

//             <div class="card-footer">Lorem ipsum dolor sit amet.</div>
//           </div>
//         </div>

//         <TeacherMap
//           id="myMap"
//           isActive={this.state.showCreateFromScratchForm}
//           options={{
//             center: { lat: 0, lng: 0 },
//             zoom: 2,
//             mapTypeId: "hybrid",
//           }}
//         />
//       </Fragment>
//     );
//   }
// }

// // class CreateHuntCard extends Component {
// //   render() {
// //     return (
// //       // <div>
// //       //   <h1>hello I am create</h1>
// //       // </div>
// //       <div>
// //         <div class="card-container">
// //           <div class="card">
// //             <div class="card-count-container">
// //               <div class="card-count">Create From Scratch</div>
// //             </div>

// //             <div class="card-content">
// //               <h4>Click here to create From scratch</h4>
// //             </div>

// //             <div class="card-footer">Lorem ipsum dolor sit amet.</div>
// //           </div>

// //           <div class="card">
// //             <div class="card-count-container">
// //               <div class="card-count">Choose from existing one</div>
// //             </div>
// //             <div class="card-content">
// //               <Link to="/teachermanagestudents">
// //                 <h4>Click here to Choose from existing one</h4>
// //               </Link>
// //             </div>

// //             <div class="card-footer">Lorem ipsum dolor sit amet.</div>
// //           </div>
// //         </div>
// //       </div>

// //       //       {/* <TeacherMap
// //       //   id="myMap"
// //       //   isActive={false}
// //       //   options={{
// //       //     center: { lat: 0, lng: 0 },
// //       //     zoom: 2,
// //       //     mapTypeId: "hybrid",
// //       //   }}
// //       // /> */}
// //     );
// //   }
// // }

// export default CreateHuntCard;
