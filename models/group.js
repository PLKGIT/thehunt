/*  Mongoose  */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*  Schema  */
const groupSchema = new Schema({
    group_id: {
        type: String
    },
    teacher_id: {
        type: String,
        required: true
    },
    group_name: {
        type: String,
        required: true
    },
    grade_level: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required:true
    },
    hunt_id: {
        type: Array,
        required: true
    },
    student_id: {
        type: Array,
        required: true
    }
});

const Group = mongoose.model("group", groupSchema);

module.exports = Group;