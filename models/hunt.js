/*  Mongoose  */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*  Schema  */
const huntSchema = new Schema({
    hunt_id: {
        type: String
    },
    teacher_id: {
        type: String
        // required: true
    },
    favorite_id: {
        type: String
    },
    clue: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },
    image_url: {
        type: String
        // required: true
    },
    description: {
        type: String
        // required: true
    },
    hunt_data: {
        type: Map
        // required: true
    },
    status: {
        type: String,
        default: "Pending",
        required: true
    },
    start_date: {
        type: Date,
        required: false
    },
    end_date: {
        type: Date,
        required: false
    },
    share: {
        type: Boolean,
        default: 1,
        required: true
    }
});

const Hunt = mongoose.model("hunt", huntSchema);

module.exports = Hunt;