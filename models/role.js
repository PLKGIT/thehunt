/*  Mongoose  */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*  Schema  */
const roleSchema = new Schema({
    role_id: {
        type: String
    },
    role_name: {
        type: String,
        required: true // Admin, Teacher, User/Student
    }
});

const Role = mongoose.model("role", roleSchema);

module.exports = Role;