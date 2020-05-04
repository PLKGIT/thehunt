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
const Student = require("../../models/student");

/*  Routes  */
routers.post("/register", (req, res) => {

  /*  Form Validation  */
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Student.findOne({ email: req.body.email }).then(student => {
    if (student) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newStudent = new Student({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      });

      /*  Hash Password  */
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newStudent.password, salt, (err, hash) => {
          if (err) throw err;
          newStudent.password = hash;
          newStudent
            .save()
            .then(student => res.json(student))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

/*  Student Login  */
routers.post("/login", (req, res) => {
  /*  Form Validation  */
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  /*  Find User by Email  */
  Student.findOne({ email }).then(student => {
    if (!student) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    /*  Check Password  */
    bcrypt.compare(password, student.password).then(isMatch => {
      if (isMatch) {
        /*  Create JWT Payload  */
        const payload = {
          id: student.id,
          first_name: student.first_name,
          last_name: student.last_name
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

module.exports = routers;