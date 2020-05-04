/*  Express  */
const express = require("express");

/*  Express Router  */
const router = express.Router();

/*  Bcryot  */
const bcrypt = require("bcryptjs");

/*  JWT  */
const jwt = require("jsonwebtoken");

/*  MongDB Config  */
const keys = require("../../config/keys");

// Form Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

/*  Teacher Model  */
const User = require("../../models/user");

/*  Routes  */
router.post("/register", (req, res) => {

  /*  Form Validation  */
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      });

      /*  Hash Password  */
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

/*  Teacher Login  */
router.post("/login", (req, res) => {
  /*  Form Validation  */
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  /*  Find User by Email  */
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    /*  Check Password  */
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
    /*  Create JWT Payload  */
        const payload = {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name
        };

    /*  Sign JWT Payload  */
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;