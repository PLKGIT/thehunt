/*  Mongoose  */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*  Schema  */
const scoreSchema = new Schema({
    started: {
        type: Date
    },
    finished: {
        type: Date
    },
    completed: {
        type: Boolean,
        default: 0,
        required:true
    },
    q_points: {
        type: Map
    },
    total: {
        type: Number
    },
    hunt_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    group_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    teacher_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    student_id: {
        type: mongoose.Types.ObjectId,
        required: true
    }
});

const Score = mongoose.model("score", scoreSchema);

module.exports = Score;