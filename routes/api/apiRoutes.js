const router = require("express").Router();
const db = require("../../models");

router.route("/api/clues")
  .get(function(req, res) {
    db.Hunt
      .find(req.query)
    //   .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  .post(function(req, res) {
    db.Hunt
      .create(req.body)
      console.log("db.hunt.create function hit")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });