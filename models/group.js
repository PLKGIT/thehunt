const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    group_id: {
        type: String
    },
    name: {
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
    teacher_id: {
        type: String,
        required: true
    },
    student_id: {
        type: Array,
        required: true
    }
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;