import React, { Component } from "react";
import { Input, FormBtn } from "../Form/Form";
// import Map from "../TeacherMap/TeacherMap.js"

class CreateHunt extends Component {
    state = {
        clues: [],
        clue: "",
        answer: "",
        location: ""
    };
    
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


    render() {
        return (
            <>
                <h1>Create your own hunt!</h1>
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
                        placeholder="Location (optional)"
                    />
                    <FormBtn
                        disabled={!(this.state.clue && this.state.answer)}
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

                <Map
          id="myMap"
          options={{
            center: { lat: 0, lng: 0 },
            zoom: 2,
            mapTypeId: 'hybrid'
          }}
          />
                </form>
            </>
                        
            );
    }
}


export default CreateHunt;