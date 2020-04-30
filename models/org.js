const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const org = new Schema({
    org_id: {
        type: String
    },
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

const Org = mongoose.model("Org", org);

module.exports = Org;