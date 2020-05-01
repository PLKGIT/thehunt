const mongoose = require("mongoose");
const email = require('mongoose-type-email');


const Schema = mongoose.Schema;

const student = new Schema({
    student_id: {
        type: String
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        allowBlank: false
    },
    password: {
        type: String,
        required:true
    },
    role: {
        type: String,
        required:true
    },
    group_id: {
        type: Array,
        required: true
    },
    hunt_id: {
        type: Array,
        required: true
    }
});

const Student = mongoose.model("Student", student);

module.exports = Student;