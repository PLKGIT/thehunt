/*  Mongoose  */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*  Schema  */
const huntSchema = new Schema({
    teacher_id: {
        type: mongoose.Types.ObjectId
        // required: true
    },
    favorite_id: {
        type: mongoose.Types.ObjectId
    },
    title: {
        type: String
        // required: true
    },
    created_by: {
        type: String
        // required: true
    },
    category: {
        type: String
        // required: true
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
        type: Array
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