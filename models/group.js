/*  Mongoose  */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*  Schema  */
const groupSchema = new Schema({
    teacher_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    group_name: {
        type: String,
        required: true
    },
    grade_level: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required:true
    },
    hunt_id: {
        type: Array,
        required: true
    },
    student_id: {
        type: Array,
        required: true
    }
});

const Group = mongoose.model("group", groupSchema);

/*  Exporting Schema  */
module.exports = Group;