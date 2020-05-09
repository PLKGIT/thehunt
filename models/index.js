const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.Admin = require("./admin"),
db.Group = require("./group"),
db.Score = require("./score"),
db.Student = require("./student"),
db.Teacher = require("./teacher"),
db.Favorite = require("./favorite"),
db.Hunt = require("./hunt"),
db.user = require("./user.model");
db.role = require("./role.model");
db.ROLES = ["user", "teacher", "admin"];

module.exports = db;