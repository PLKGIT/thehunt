const mongoose = require("mongoose");
require('mongoose-type-email');

const Schema = mongoose.Schema;

const favorite = new Schema({
    favorite_id: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Array,
        required: true
    },
    hunt_data: {
        type: Map,
        required: true
    }
});

const Favorite = mongoose.model("Favorite", favorite);

module.exports = Favorite;