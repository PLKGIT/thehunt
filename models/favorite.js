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
    image: {
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

const Favorite = mongoose.model("favorite", favoriteSchema);

module.exports = Favorite;