const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.group = require("./group"),
db.score = require("./score"),
db.favorite = require("./favorite"),
db.hunt = require("./hunt"),
db.user = require("./user.model");
db.role = require("./role.model");
db.org = require("./org");
db.ROLES = ["user", "teacher", "admin"];

module.exports = db;