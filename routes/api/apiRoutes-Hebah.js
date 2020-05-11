const router = require("express").Router();
const db = require("../../models");
const path = require("path");

router.route("/api/clues")

  .post(function(req, res) {
    console.log("router.post function hit")
    db.Hunt.create(req.body)
  });

router.route("/api/clues")
  .get(function(req, res) {
    console.log("router.get function hit")
    db.Hunt.find({})
    .then(dbModel => res.json(dbModel))
    // .then(dbModel => console.log(dbModel))
    .catch(err => res.status(422).json(err));
  })
  module.exports = router;