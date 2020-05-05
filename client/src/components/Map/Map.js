import React, { Component } from 'react';
import { Input, FormBtn } from "../Form/Form.js"

class Map extends Component {
    constructor(props) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this)
    }
    state = {
        question: "",
        answer: ""
    }

   

    // infowindow = new window.google.maps.InfoWindow();
  
    //  map = new window.google.maps.Map(
    //     document.getElementById('map'), {
    //     zoom: 18,
    //     mapTypeId: 'satellite',
    //     heading: 90,
    //     tilt: 45
    // });

    
    onScriptLoad() {
        console.log("hello")
        const map = new window.google.maps.Map(
            document.getElementById(this.props.id),
            this.props.options);
        // this.props.onMapLoad(map)
    }

    // onPlaceSearch(results, status) {
    //     console.log(results)
    //     if (status === window.google.maps.places.PlacesServiceStatus.OK) {
    //         for (let i = 0; i < results.length; i++) {
    //             let place = results[i]
    //             const lat = place.geometry.location.lat()
    //             const lng = place.geometry.location.lng()
    //             this.setState({
    //                 currentLocation: { lat: lat, lng: lng },
    //             })
    //         }
    //     }
    // }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.answer)
        var request = {
            query: this.state.answer,
            fields: ['name', 'geometry']
         
        };
        var maps = document.getElementById('myMap')

        const map = new window.google.maps.Map(
            document.getElementById(this.props.id),
            // this.props.options.center,
            {zoom: 18,
            mapTypeId: 'satellite'});
        const service = new window.google.maps.places.PlacesService(map)

        console.log(this.props.id)

        service.findPlaceFromQuery(request, function (results, status) {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                     createMarker(results[i]);
                     autoRotate();
                    console.log(results[i])
                }
                console.log(results[0].name)
                map.setCenter(results[0].geometry.location);
            }
        });

        function createMarker(place) {

            var marker = new window.google.maps.Marker({
                map: map,
                position: place.geometry.location,
            });

            window.google.maps.event.addListener(marker, 'click', function () {
                const infowindow = new window.google.maps.InfoWindow();
                infowindow.setContent(place.name);
                infowindow.open(this.map, this);
            });


        }

        function rotate90() {
            var heading = map.getHeading() || 0;
            map.setHeading(heading + 90);
        }

        function autoRotate() {
            // Determine if we're showing aerial imagery.
            if (map.getTilt() !== 0) {
                window.setInterval(rotate90, 3000);
            }
        }

        //service.findPlaceFromQuery (request, this.onPlaceSearch)
        // service.findPlaceFromQuery(this.state.answer, function(results, status) {
        //     if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        //     //   for (var i = 0; i < results.length; i++) {
        //     //     createMarker(results[i]);
        //     //   }
        //       this.map.setCenter(results[0].geometry.location);
        //     }
        //   });
    }

    handleInputChange = event => {
        this.setState({
            answer: event.target.value
        });
    };

    componentDidMount() {
        console.log("hello")
        if (!window.google) {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = `https://maps.google.com/maps/api/js?key=AIzaSyAmLr5yU5_SJ5Jx1AA-T59scJF4xuLvLEc&libraries=places`;
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
            // Below is important. 
            //We cannot access google.maps until it's finished loading
            s.addEventListener('load', e => {
                this.onScriptLoad()
            })
        } else {
            this.onScriptLoad()
        }
    }

    render() {
        return (
            <>
                <div style={{ width: 500, height: 500 }} id={this.props.id} />
                <div className="form">
                    <form className="form">
                        <p>Questions will appear here</p>
                        <Input
                            value={this.state.answer}
                            onChange={this.handleInputChange}
                            name="answer"
                            placeholder="Type your answer here"
                        >
                        </Input>
                        <FormBtn
                            onClick={this.handleFormSubmit}
                            className="form"
                        >
                            Check your answer
                        </FormBtn>
                    </form>
                </div>
            </>
        );
    }
}

export default Map