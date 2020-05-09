const router = require("express").Router();
const db = require("../../models");

router.route("/api/clues")

  .post(function(req, res) {
    
  });

  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  module.exports = router;