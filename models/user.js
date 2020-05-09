const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*  Schema  */
const userSchema = new Schema({
    user_id: {
        type: String
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        allowBlank: false
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        required: true
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
const User = mongoose.model('user', userSchema);

module.exports = User;