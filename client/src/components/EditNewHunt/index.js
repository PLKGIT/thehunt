/*  React  */
import React, { Component } from 'react';

/*  Axios  */
import Axios from 'axios';

/*  Create EditNewHunt  */
class EditNewHunt extends Component {
    state = {
        clues: JSON.parse(localStorage.getItem("clues")),
        clue: "",
        answer: "",
        location: "",
        hideForm: true
    }

    componentDidMount() {
        console.log(this.state.clues)
        console.log(this.state.clues[1].answer)
    }

    handleFormSubmit = () => {
        Axios.post("/api/clues", this.state.clues)
        console.log("axios.post function hit")
    }

    handleChange = event => {
        var tempClues = JSON.parse(localStorage.getItem("clues"))
        var i = event.target.id
        console.log("inded of input I'm trying to change: " + i)
        console.log("object I'm tyring to change: " + JSON.stringify(tempClues[i]))
        var attr = event.target.name
        console.log("attr: " + attr)
        console.log(tempClues)
    }

    render() {
        return (
            <>
                {/* <h3>Does this page work?</h3> */}
                <ul>
                    <li>something</li>
                    <li>something</li>
                    <li>something</li>
                    <li>something</li>
                    <li>something</li>
                    <li>something</li>
                </ul>

                <div id="clues" >
                    {this.state.clues.map(clue => (
                        <div className="huntDataToEdit">
                            <p>Clue:</p>
                            <input 
                                name="clue"
                                id={clue.id}
                                defaultValue={clue.clue} 
                                onChange={this.handleChange} 
                                />
                            <p>Answer: </p>
                            <input
                            name="answer"
                            id={clue.id}
                            defaultValue={clue.answer}
                            onChange={this.handleChange}
                            />
                            <p>Location:</p>
                            <input 
                            name="location"
                            id={clue.id}
                            defaultValue={clue.location}
                            onChange={this.handleChange}
                            />
                            {/* <button id={clue.id} onClick={this.editQuestion}>Edit this question</button> */}
                        </div>
                    ))}
                </div>
                <button onClick={this.handleFormSubmit}>Save Hunt</button>
            </>
        )
    }
}

/*  Export EditNewHunt  */
export default EditNewHunt