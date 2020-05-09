/*  Mongoose  */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*  Schema  */
const teacherSchema = new Schema({
    teacher_id: {
        type: String
    },
    first_name: {
        type: String,
        required: false //for testing only
    },
    last_name: {
        type: String,
        required: false //for testing only
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    group_id: {
        type: Array

    },
    hunt_id: {
        type: Array
    }
});

const Teacher = mongoose.model('teacher', teacherSchema);

module.exports = Teacher;