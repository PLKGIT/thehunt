import React, { Component } from 'react';
import { Input, FormBtn } from "../Form/Form.js"
import Axios from "axios";


class Map extends Component {
    constructor(props) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this)
        this.state = {
            clues: [],
            currentClue: "",
            correctAnswer: "",
            location: "",
            studentAnswer: "",
            question: 0,
            mapSearched: false
        }
    }
    // state = {
    //     question: "",
    //     answer: "",
    //     clues: ""
    // }

    // self = this;


    // infowindow = new window.google.maps.InfoWindow();

    //  map = new window.google.maps.Map(
    //     document.getElementById('map'), {
    //     zoom: 18,
    //     mapTypeId: 'satellite',
    //     heading: 90,
    //     tilt: 45
    // });


    onScriptLoad() {
        console.log("hello from onscriptLoad")
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

    correctMapSearch = () => {
        // event.preventDefault();
        console.log(this.state.answer)
        var query;
        if (!this.state.location) {
            query = this.state.correctAnswer;
        } else {
            query = this.state.location;
        }
        var request = {
            query: query,
            fields: ["name", "geometry"],
        };
        // var request = {
        //     query: this.state.correctAnswer,
        //     fields: ['name', 'geometry']
        // };
        var maps = document.getElementById('myMap')

        const map = new window.google.maps.Map(
            document.getElementById(this.props.id),
            // this.props.options.center,
            {
                zoom: 18,
                mapTypeId: 'satellite'
            });
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
        this.setState({mapSearched: true})
    }

    handleInputChange = event => {
        this.setState({
            studentAnswer: event.target.value
        });
    };

    async componentDidMount() {
        var self = this;
        console.log("hello from componentDidMount")
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
        }
        // else {
        //     this.onScriptLoad()
        // }
        // this.huntData()
        // console.log(" state is below")
        // console.log(this.state)
        await Axios.get("/api/clues")
            .then(function (res) {
                console.log("---------------------")
                console.log(res.data[9].hunt_data)
                console.log("---------------------")

                // var info = res.data[9].hunt_data[0].clue
                var info = res.data[9].hunt_data
                console.log("info: " + info)
                // var clue = this.state.clues.concat(res.data[9])
                // self.setState({clues: info})


                for (var i = 0; i < info.length; i++) {
                    var arr = [];
                    arr.push(info[i])
                    self.setState({ clues: self.state.clues.concat(arr) })
                }

                console.log("clues state: " + self.state.clues)
            })

        console.log("clues state outside of axios call: ")
        console.log(this.state.clues)

        console.log("self state clues: ")
        console.log(self.state.clues)

        // this.displayClue();
    }

    displayClue = (event) => {
        event.preventDefault();
        this.setState({mapSearched: false})
        var count = this.state.question
        var obj = this.state.clues[count]
        var thisObj = obj.clue
        var thisAns = obj.answer
        var thisLoc = obj.location
        // this.setState({clue: this.state.clues[count].clue})
        console.log("THIS IS WHAT WE'RE LOOKING FOR:")
        console.log(count)
        console.log(thisObj)
        // this.setState({clue: thisObj})
        this.setState({ currentClue: thisObj })
        this.setState({ correctAnswer: thisAns })
        this.setState({ location: thisLoc })
        this.setState({ numClues: this.state.clues.length })
           
        if (count < this.state.numClues - 1) {
            count++
            this.setState({ question: count })
        } else {
            this.setState({endOfHunt: true})
            console.log("END OF HUNT")
        }
    }

    // increment = () => {
    //     var count = this.state.question
    //     count++
    //     this.setState({ question: count })
    // }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.correctAnswer)
        console.log(this.state.studentAnswer)
        if (this.state.studentAnswer === this.state.correctAnswer) {
            this.correctMapSearch();
            console.log("CORRECT! modal will pop up now")
        }
        else {
            console.log("WRONG! modal will pop up now")
        }
    }
    // huntData = () => {

    //     Axios.get("/api/clues")
    //     .then(function(res) {
    //         var info = res.data[9].hunt_data[0].clue
    //         console.log("info: " + info)
    //         // var clue = this.state.clues.concat(res.data[9])
    //         self.setState({clues: info})
    //         // console.log("clues state: " + this.state.clues)
    //     })
    //     console.log("self is below")
    //     console.log(self)

    // }

    render() {
        return (
            <>
                <div style={{ width: 500, height: 500 }} id={this.props.id} />
                <div className="form">
                    <form className="form">
                        <FormBtn
                            onClick={this.displayClue}
                        >
                            Start Quiz
                            </FormBtn>
                        <p>Questions will appear here</p>
                        <p>{this.state.currentClue}</p>
                        <p>{this.state.correctAnswer}</p>
                        <p>{this.state.location}</p>
                        <p>{this.state.numClues}</p>

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

                        <FormBtn
                            onClick={this.displayClue}
                            disabled={!this.state.mapSearched}
                        >
                            Next Question
                        </FormBtn>
                    </form>
                </div>
            </>
        );
    }
}

export default Map