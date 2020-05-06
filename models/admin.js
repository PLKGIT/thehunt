/*  Mongoose  */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*  Schema  */
const adminSchema = new Schema({
    admin_id: {
        type: String
    },
    first_name: {
        type: String,
        default:"Admin"
    },
    last_name: {
        type: String,
        default:"User"
    },
    email: {
        type: String,
        default:"admin@unlockit.com",
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default:"Admin"
    },
    hunt_id: {
        type: Array
    }
});

const Admin = mongoose.model('admin', adminSchema);

module.exports = Admin;