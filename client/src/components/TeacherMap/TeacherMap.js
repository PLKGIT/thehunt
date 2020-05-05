import React, { Component } from 'react';
import { Input, FormBtn } from "../Form/Form.js"

class Map extends Component {
    constructor(props) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this)
    }
    state = {
        clues: [],
        clue: "",
        answer: "",
        location: "",
        locationSearched: false
    };

   
    onScriptLoad() {
        console.log("hello")
        const map = new window.google.maps.Map(
            document.getElementById(this.props.id),
            this.props.options);
        // this.props.onMapLoad(map)
    }

    renderMap = event => {
        event.preventDefault();
        console.log(this.state.location)
        var query;
        if (!this.state.location) {
            query = this.state.answer
        } else {
            query = this.state.location
        }
        var request = {
            query: query,
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

        
        this.setState({locationSearched: true})
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleQuestionSubmit = event => {
        event.preventDefault();
        if (this.state.clue && this.state.answer) {
            console.log("clue: " + this.state.clue + "and answer: " + this.state.answer)
            var obj = {clue: this.state.clue, answer: this.state.answer, location: this.state.location}
            this.state.clues.push(obj)
            console.log(this.state.clues)
            this.setState({clue: "", answer: "", location: ""})
        }
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // modal saying "Hunt Added"
        // redirect to 'Manage Hunts' page
        var obj = {clue: this.state.clue, answer: this.state.answer, location: this.state.location}
        this.state.clues.push(obj)
        console.log(this.state.clues)
    }

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
            <form>
                    <Input
                        id="clue"
                        value={this.state.clue}
                        onChange={this.handleInputChange}
                        name="clue"
                        placeholder="Clue (required)"
                    />
                    <Input
                        value={this.state.answer}
                        onChange={this.handleInputChange}
                        name="answer"
                        placeholder="Answer (required)"
                    />
                    <Input
                        value={this.state.location}
                        onChange={this.handleInputChange}
                        name="location"
                        placeholder="Location (Leave blank if same as answer)"
                    />
                    <FormBtn
                        disabled={!(this.state.clue && this.state.answer && this.state.locationSearched)}
                        onClick={this.handleQuestionSubmit}
                    >
                        Submit another question
                </FormBtn>
                    <FormBtn
                        disabled={!(this.state.clues.length > 1)}
                        onClick={this.handleFormSubmit}
                    >
                        Submit this hunt
                </FormBtn>
                <FormBtn
                onClick={this.renderMap}
                value={this.state.location}
                disabled={!(this.state.answer || this.state.location)}
                >
                    Confirm location
                </FormBtn>
                </form>
                <div style={{ width: 500, height: 500 }} id={this.props.id} />
                <div className="form">
                    <form className="form">
                        {/* <p>Questions will appear here</p> */}
                        {/* <Input
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
                        </FormBtn> */}
                    </form>
                </div>
            </>
        );
    }
}

export default Map