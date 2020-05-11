/*  Mongoose  */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*  Schema  */
const orgSchema = new Schema({
    org_name: {
        type: String,
        required: true
    },
    org_city: {
        type: String,
        required: true
    },
    org_state: {
        type: String,
        required: true
    }
});

const Org = mongoose.model("org", orgSchema);

module.exports = Org;