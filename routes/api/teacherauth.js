/*  Express  */
const express = require("express");

/*  Express Router  */
const routers = express.Router();

/*  Bcryot  */
const bcrypt = require("bcryptjs");

/*  JWT  */
const jwt = require("jsonwebtoken");

/*  MongDB Config  */
const keys = require("../../config/keys");

// Form Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

/*  Student Model  */
const Teacher = require("../../models/teacher");

/*  Routes  */
router.post("/register", (req, res) => {

  /*  Form Validation  */
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Teacher.findOne({ email: req.body.email }).then(teacher => {
    if (teacher) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newTeacher = new Teacher({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      });

      /*  Hash Password  */
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newTeacher.password, salt, (err, hash) => {
          if (err) throw err;
          newTeacher.password = hash;
          newTeacher
            .save()
            .then(teacher => res.json(teacher))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

/*  Student Login  */
router.post("/login", (req, res) => {
  /*  Form Validation  */
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  /*  Find User by Email  */
  Teacher.findOne({ email }).then(teacher => {
    if (!teacher) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    /*  Check Password  */
    bcrypt.compare(password, teacher.password).then(isMatch => {
      if (isMatch) {
        /*  Create JWT Payload  */
        const payload = {
          id: teacher.id,
          first_name: teacher.first_name,
          last_name: teacher.last_name
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