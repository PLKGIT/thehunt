/*  Mongoose  */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*  Schema  */
const studentSchema = new Schema({
    student_id: {
        type: String
    },
    first_name: {
        type: String,
        required: false // for testing only
    },
    last_name: {
        type: String,
        required: false // for testing only
    },
    email: {
        type: String,
        allowBlank: false
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default:"Student"
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
const Student = mongoose.model('student', studentSchema);

module.exports = Student;