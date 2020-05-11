const db = require("../../models");
const controller = require("../../controllers/app.controller");
const path = require("path");
const User = db.user;
const Role = db.role;
const Org = db.org;
const Group = db.group;
const Hunt = db.hunt;
const Favorite = db.favorite
const Score = db.score

module.exports = function (app) {
  app.get("/dbroles", function (req, res) {
    Role.find({}, function (err, found) {
      if (err) {
        console.log(err);
      }
      else {
        res.json(found);
      }
    });
  });

  app.get("/dbusers", function (req, res) {
    User.find({}, function (err, found) {
      if (err) {
        console.log(err);
      }
      else {
        res.json(found);
      }
    });
  });

  app.get("/dborg", function (req, res) {
    Org.find({}, function (err, found) {
      if (err) {
        console.log(err);
      }
      else {
        res.json(found);
      }
    });
  });

  app.post(
    "/api/createorg", controller.createOrg);

  app.get("/dbgroup", function (req, res) {
    Group.find({}, function (err, found) {
      if (err) {
        console.log(err);
      }
      else {
        res.json(found);
      }
    });
  });

  app.post(
    "/api/creategroup", controller.createGroup);

  app.get("/dbhunt", function (req, res) {
    Hunt.find({}, function (err, found) {
      if (err) {
        console.log(err);
      }
      else {
        res.json(found);
      }
    });
  });

  app.post(
    "/api/createhunt", controller.createHunt);


  app.get("/dbfavorite", function (req, res) {
    Favorite.find({}, function (err, found) {
      if (err) {
        console.log(err);
      }
      else {
        res.json(found);
      }
    });
  });
  
  app.post(
    "/api/createfavorite", controller.createFavorite);


  app.get("/dbscore", function (req, res) {
    Score.find({}, function (err, found) {
      if (err) {
        console.log(err);
      }
      else {
        res.json(found);
      }
    });
  });

  app.post(
    "/api/createscore", controller.createScore);
};