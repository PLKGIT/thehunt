/*  Mongoose  */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*  Schema  */
const favoriteSchema = new Schema({
    favorite_id: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    created_by: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    hunt_data: {
        type: Map,
        required: true
    },
    rating: {
        type: Array,
        required: true
    },
    share: {
        type: Boolean,
        default: 1,
        required: true
    }
});

const Favorite = mongoose.model("favorite", favoriteSchema);

module.exports = Favorite;