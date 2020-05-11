const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.Group = require("./group"),
db.Score = require("./score"),
db.Favorite = require("./favorite"),
db.Hunt = require("./hunt"),
db.user = require("./user.model");
db.role = require("./role.model");
db.org = require("./org");
db.ROLES = ["user", "teacher", "admin"];

module.exports = db;