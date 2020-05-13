/*  React */
import React, { Component } from 'react';

/*  Import Input and FormBtn  */
import { Input, FormBtn } from "../Form/Form.js"

/*  Axios  */
import Axios from "axios";

/*  Styling  */
import "../../styles/studentPlay.scss"

/*  Create Map  */
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
            mapSearched: false,
            status: "",
            displayText: "",
            similarity: 0,
            endOfHunt: false,
            score: 0,
            tryAgain: false
        }
    }

    onScriptLoad() {
        console.log("hello from onscriptLoad")
        const map = new window.google.maps.Map(
            document.getElementById(this.props.id),
            this.props.options);
    }



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
        this.setState({ mapSearched: true })
    }

    handleInputChange = event => {
        this.setState({
            studentAnswer: event.target.value
        });
        this.checkSimilarity();
    };

    async componentDidMount() {
        var self = this;
        this.displayTextBox();
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
        // await Axios.get("/api/createhunt")
        await Axios.get("/dbhunt")
            .then(function (res) {
                console.log("---------------------")
                console.log(res.data)
                console.log("---------------------")

                // var info = res.data[9].hunt_data[0].clue
                var info = res.data[0].hunt_data
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
    checkSimilarity = () => {
        function similarity(s1, s2) {
            var longer = s1;
            var shorter = s2;
            if (s1.length < s2.length) {
                longer = s2;
                shorter = s1;
            }
            var longerLength = longer.length;
            if (longerLength === 0) {
                return 1.0;
            }
            return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
        }
        function editDistance(s1, s2) {
            s1 = s1.toLowerCase();
            s2 = s2.toLowerCase();

            var costs = new Array();
            for (var i = 0; i <= s1.length; i++) {
                var lastValue = i;
                for (var j = 0; j <= s2.length; j++) {
                    if (i === 0)
                        costs[j] = j;
                    else {
                        if (j > 0) {
                            var newValue = costs[j - 1];
                            if (s1.charAt(i - 1) !== s2.charAt(j - 1))
                                newValue = Math.min(Math.min(newValue, lastValue),
                                    costs[j]) + 1;
                            costs[j - 1] = lastValue;
                            lastValue = newValue;
                        }
                    }
                }
                if (i > 0)
                    costs[s2.length] = lastValue;
            }
            return costs[s2.length];
        }
        var $str1 = this.state.studentAnswer;
        var $str2 = this.state.correctAnswer;

        var perc = Math.round(similarity($str1, $str2) * 10000) / 100;
        this.setState({ similarity: perc })
        console.log(this.state.similarity)
        console.log("INSIDE THE CHECK SIMILARITY FUNCITON")
    }

    displayClue = (event) => {
        event.preventDefault();
        this.setState({ similarity: 0 })
        this.setState({ displayText: "" })
        this.setState({ mapSearched: false })
        this.setState({ studentAnswer: "" })
        var count = this.state.question
        var obj = this.state.clues[count]
        var thisObj = obj.clue
        var thisAns = obj.answer
        var thisLoc = obj.location
        // this.setState({clue: this.state.clues[count].clue})
        console.log("THIS IS WHAT WE'RE LOOKING FOR:")
        console.log(count)
        this.setState({ currentClue: thisObj })
        this.setState({ correctAnswer: thisAns })
        this.setState({ location: thisLoc })
        this.setState({ numClues: this.state.clues.length })

        if (count < this.state.numClues - 1) {
            this.increment();
        } else {
            this.setState({ endOfHunt: true })
            console.log("END OF HUNT")
        }
    }

    increment = () => {
        var count = this.state.question
        count++
        console.log("count is below")
        console.log(count)
        this.setState({ question: count })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        var score = this.state.score
        if (this.state.similarity > 40) {
            this.setState({ score: score + 10 })
            this.setState({ tryAgain: false })
            this.correctMapSearch();
            this.setState({ status: "correct" })
            this.setState({ displayText: "Congrats! That's correct" })
            console.log("CORRECT! modal will pop up now")
        }
        else {
            this.setState({ status: "incorrect" })
            if (!this.state.tryAgain) {
                this.setState({ score: score - 5 })
            }
            this.setState({ tryAgain: true })
            this.setState({ status: "incorrect", displayText: "Wrong!" })
            console.log("WRONG! modal will pop up now")
        }
        console.log("score is below")
        console.log(this.state.score)
        // if (this.state.studentAnswer.toLowerCase() === this.state.correctAnswer.toLowerCase()) {
        //     this.correctMapSearch();
        //     this.setState({ status: "correct" })
        //     this.setState({ displayText: "Congrats! That's correct" })
        //     console.log("CORRECT! modal will pop up now")
        //     // this.displayTextBox();
        // }
        // else {
        //     this.setState({ status: "incorrect", displayText: "Wrong!" })
        //     console.log("WRONG! modal will pop up now")
        //     // this.displayTextBox();
        // }
        // this.displayTextBox();
    }

    displayTextBox = () => {
        if (this.state.status === "correct") {
            this.setState({ displayText: "Congratulations!  You guessed the correct answer.  Click next question to unlock the next clue." })
        } else if (this.state.status === "waiting") {
            this.setState({ displayText: "Take a guess!" })
        } else if (this.state.status === "incorrect") {
            this.setState({ displayText: "Oh no! That is not the correct answer.  Please try again." })
        }
    }

    // handleNextQuestion = event => {

    //     event.preventDefault();
    //     this.setState({mapSearched: false})
    //     var count = this.state.question;
    //     if (count < this.state.numClues - 1) {
    //         this.displayClue();
    //         count++
    //         this.setState({ question: count })
    //     } else {
    //         this.setState({endOfHunt: true})
    //         console.log("END OF HUNT")
    //     }
    // }
    // displayClue = event => {
    //     event.preventDefault();
    //     this.setState({mapSearched: false})
    //     var count = this.state.question
    //     var obj = this.state.clues[count]
    //     var thisObj = obj.clue
    //     var thisAns = obj.answer
    //     var thisLoc = obj.location
    //     this.setState({ currentClue: thisObj })
    //     this.setState({ correctAnswer: thisAns })
    //     this.setState({ location: thisLoc })
    //     this.setState({ numClues: this.state.clues.length })
    // }



    render() {
        return (
            <>
                <div className="wrapper">
                    <h1 className="text-center">PLAY HUNT</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <form className="form playForm">
                                <FormBtn className="nav btn startQuiz"
                                    onClick={this.displayClue}
                                >
                                    Start Quiz
                            </FormBtn>
                            </form>

                        </div>
                    </div>
                    <div className="row content">
                        <div className="col-m-4">
                            <div className="row">


                                <div className="form">
                                    <form className="form playForm">
                                        {/* <FormBtn
                                        onClick={this.displayClue}
                                        >
                                        Start Quiz
                                        </FormBtn> */}

                                        <p
                                            className={this.state.status === "correct" ? "playPageCorrect" : "playPageIncorrect"}
                                        >
                                            {this.state.displayText}
                                        </p>
                                        <p>Score: {this.state.score}</p>
                                    </form>
                                </div>
                                </div>
                                <div className="row">
                                    <form className="form playForm">
                                        <p>Clue: {this.state.currentClue}</p>
                                        {/* <p>{this.state.correctAnswer}</p>
                                        <p>{this.state.location}</p>
                                        <p>{this.state.numClues}</p> */}
                                    </form>
                                </div>
                                <div className="row">
                                    <form className="form playForm">
                                        <Input
                                            value={this.state.studentAnswer}
                                            onChange={this.handleInputChange}
                                            name="answer"
                                            placeholder="Type your answer here"
                                        >
                                        </Input>
                                    </form>
                                </div>
                                <div className="row">
                                    <form className="form playForm">
                                        <FormBtn 
                                            onClick={this.handleFormSubmit}
                                            disabled={this.state.mapSearched}
                                            className="form customBtn"
                                        >
                                            Check your answer
                                        </FormBtn>
                                    </form>
                                </div>
                                <div className="row lastRow">
                                    <div className="col-m-6">
                                <form className="form playForm ">
                                    <FormBtn
                                    className="customBtn"
                                        onClick={this.displayClue}
                                        disabled={!this.state.mapSearched}
                                    >
                                        Next Question
                                    </FormBtn>
                                    </form>
                                    </div>
                                    <div className="col-m-6 completeHunt">
                                <form className="form playForm">
                                    <FormBtn
                                    className="customBtn"
                                        onClick={(event) => {
                                            event.preventDefault()
                                            window.location.href = "/studenthistory"
                                        }}
                                    >Complete Hunt
                                    </FormBtn>
                                    {/* <Link to="/studenthistory">
                                    Complete Hunt</Link> */}
                                </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-m-8 mapDisplay">
                            <div style={{ width: 500, height: 500 }} id={this.props.id} />
                        </div>
                        
                    </div>
                </div>
            </>
        );
    }
}

/*  Export Map  */
export default Map