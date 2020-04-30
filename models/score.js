const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const score = new Schema({
    score_id: {
        type: String
    },
    started: {
        type: Date
    },
    finished: {
        type: Date
    },
    completed: {
        type: Boolean,
        default: false,
        required:true
    },
    q_points: {
        type: Map
    },
    total: {
        type: Number
    },
    hunt_id: {
        type: String,
        required: true
    },
    group_id: {
        type: String,
        required: true
    },
    teacher_id: {
        type: String,
        required: true
    },
    student_id: {
        type: String,
        required: true
    }
});

const Score = mongoose.model("Score", score);

module.exports = Score;