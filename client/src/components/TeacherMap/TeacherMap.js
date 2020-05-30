/*  React  */
import React, { Component } from "react";

/*  Import Input and FormBtn  */
import { Input, FormBtn } from "../Form/Form.js"

/*  Axios  */
import Axios from "axios";

/*  Styling  */
import "../../styles/App.scss";

/*  Create Map  */
class Map extends Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }
  state = {
    clues: [],
    title: "",
    category: "",
    imageUrl: "",
    description: "",
    clue: "",
    answer: "",
    location: "",
    locationSearched: false,
    id: 0,
    teacherId: "" 
  };

  componentDidMount() {
    const ls = localStorage.getItem("user")
    console.log("local storage teacher info")
    const teachID = JSON.parse(ls).id
    console.log(teachID)
    this.setState({teacherId: teachID})
  }

  onScriptLoad() {
    console.log("hello");
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options
    );
    // this.props.onMapLoad(map)
  }

  renderMap = (event) => {
    event.preventDefault();
    console.log(this.state.location);
    var query;
    if (!this.state.location) {
      query = this.state.answer;
    } else {
      query = this.state.location;
    }

    var request = {
      query: query,
      fields: ["name", "geometry"],
    };
    var maps = document.getElementById("myMap");

    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      // this.props.options.center,
      { zoom: 18, mapTypeId: "satellite" }
    );
    const service = new window.google.maps.places.PlacesService(map);

    console.log(this.props.id);

    service.findPlaceFromQuery(request, function (results, status) {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
          autoRotate();
          console.log(results[i]);
        }
        console.log(results[0].name);
        map.setCenter(results[0].geometry.location);
      }
    });

    function createMarker(place) {
      var marker = new window.google.maps.Marker({
        map: map,
        position: place.geometry.location,
      });

      window.google.maps.event.addListener(marker, "click", function () {
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
    this.setState({ locationSearched: true });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleQuestionSubmit = event => {
    event.preventDefault();
    this.setState({ locationSearched: false })
    if (this.state.clue && this.state.answer) {
      var id = this.state.id
      console.log("clue: " + this.state.clue + "and answer: " + this.state.answer)
      var obj = { id: id, clue: this.state.clue, answer: this.state.answer, location: this.state.location }
      id++;
      this.setState({ id: id })
      this.state.clues.push(obj)
      console.log(this.state.clues)
      this.setState({ clue: "", answer: "", location: "" })
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // modal saying "Hunt Added"
    // redirect to 'Manage Hunts' page
    var obj = { id: this.state.id, clue: this.state.clue, answer: this.state.answer, location: this.state.location }
    this.state.clues.push(obj)
    // const json = JSON.stringify(this.state.clues);
    // localStorage.setItem("clues", json)
    console.log(this.state.clues)
    Axios.post("/api/createhunt", {
      teacher_id: this.state.teacherId,
      title: this.state.title,
      category: this.state.category,
      image_url: this.state.imageUrl,
      description: this.state.description,
      hunt_data: this.state.clues
    })
    console.log("axios.post function hit")
    window.location.href = "/teachermanagehunts"
  }

  render() {
    return (
      <>
        <div className="container form1">
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-center">CREATE A HUNT</h1>
            </div>
          </div>
          <div className="row firstRow">
            <div className="col-md-6">
              <form>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
                <Input
                  value={this.state.category}
                  onChange={this.handleInputChange}
                  name="category"
                  placeholder="Category/Subject (required)"
                />
              </form>
            </div>
            <div className="col-md-6">
              <form>
                <Input
                  // value={state}
                  name="imageUrl"
                  onChange={this.handleInputChange}
                  placeholder="Image to be displayed (URL required)"
                />
                <Input
                  placeholder="Description"
                  name="description"
                  onChange={this.handleInputChange}
                />
              </form>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 customCol">
              <div className="row custom3">
                <form>
                  <Input
                    className="location"
                    id="clue" style={{marginBottom: "15px"}}
                    value={this.state.clue}
                    onChange={this.handleInputChange}
                    name="clue"
                    placeholder="Clue (required)"
                  />
                  <Input
                    className="answer" style={{marginBottom: "15px"}}
                    value={this.state.answer}
                    onChange={this.handleInputChange}
                    name="answer"
                    placeholder="Answer (required)"
                  />
                  <Input
                    className="location" style={{marginBottom: "15px"}}
                    value={this.state.location}
                    onChange={this.handleInputChange}
                    name="location"
                    placeholder="Location (Leave blank if same as answer)"
                  />
                </form>
              </div>
              <div className="row secondRow">
                <form>
                  <FormBtn className="nav btn" style={{marginBottom: "15px"}}
                    onClick={this.renderMap}
                    value={this.state.location}
                    disabled={!(this.state.answer || this.state.location)}
                  >
                    Confirm location
                </FormBtn>
                </form>
              </div>

              <div className="row thirdRow">
                <div className="col-md-6">
                  <form>
                    <FormBtn className="nav btn custom"
                      disabled={!(this.state.clue && this.state.answer && this.state.locationSearched)}
                      onClick={this.handleQuestionSubmit}
                    >
                      Submit this question
                </FormBtn>
                  </form>
                </div>
                <div className="col-md-6">
                  <form>
                    <FormBtn className="nav btn custom2"
                      disabled={!(this.state.clues.length > 1) || !(this.state.answer || this.state.location)}
                      onClick={this.handleFormSubmit}
                    >
                      Submit this question and complete hunt
                </FormBtn>

                  </form>
                </div>
              </div>
            </div>
            <div className="col=md-8 map">
              <div style={{ width: 500, height: 500 }} id={this.props.id} />
              <div className="form">
                <form className="form">
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

/*  Export Map  */
export default Map;