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
        // const json = localStorage.getItem("clues");
        // const clues = JSON.parse(json);
        // var clues = JSON.parse(localStorage.getItem("clues"))
        console.log(this.state.clues)
        console.log(this.state.clues[1].answer)

        // if (clues) {
        //     this.setState(() => ({ clues }));
        // }
    }

    handleFormSubmit = () => {
        // var arr = [];
        // arr.push(this.state.clue)
        // arr.push(this.state.answer)
        // arr.push(this.state.location)
        // console.log(arr)
        // localStorage.setItem(arr)
        Axios.post("/api/clues", this.state.clues)
        console.log("axios.post function hit")
    }

    handleChange = event => {
        // const { name, value } = event.target;
        // this.setState({
        //     [name]: value
        // });
        // var tempClues = this.state.clues;
        var tempClues = JSON.parse(localStorage.getItem("clues"))
        var i = event.target.id
        console.log("inded of input I'm trying to change: " + i)
        console.log("object I'm tyring to change: " + JSON.stringify(tempClues[i]))
        var attr = event.target.name
        console.log("attr: " + attr)
        // JSON.stringify(tempClues[i]).attr = event.target.value;
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
                                // className={this.state.hideForm ? "hiddenForm" : ""}
                                id={clue.id}
                                // value={this.state.clue}
                                defaultValue={clue.clue} 
                                onChange={this.handleChange} 
                                // ref={(input) => this.input = input} 
                                />
                            <p>Answer: </p>
                            <input
                            name="answer"
                            // className={this.state.hideForm ? "hiddenForm" : ""}
                            id={clue.id}
                            defaultValue={clue.answer}
                            onChange={this.handleChange}
                            />
                            <p>Location:</p>
                            <input 
                            name="location"
                            // className={this.state.hideForm ? "hiddenForm" : ""}
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