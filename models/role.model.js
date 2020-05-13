/*  Mongoose  */
const mongoose = require("mongoose");

/*  Schema  */
const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    name: String
  })
);

/*  Exporting Schema  */
module.exports = Role;