/*  Express  */
const express = require("express");

/*  Use Express  */
const app = express();

/*  Express Router  */
const router = express.Router();

/*  Passport  */
const passport = require("passport");

/*  Passport Middleware  */
app.use(passport.initialize());

/*  Bcrypt  */
const bcrypt = require("bcryptjs");

/*  JWT  */
const jwt = require("jsonwebtoken");

/*  MongDB Config  */
const keys = require("../../config/keys");

// Form Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

/*  User Model  */
const User = require("../../models/user");

/*  Routes  */
router.get('/'), (req,res) => {
  res.send('Hello Lock It! Users')
};

router.post('/getToken', (req, res) =>{
  if(!req.body.email || !req.body.password){
    return res.status(401).send('no fields');
  }
  User.findOne({email: req.body.email}).fetch().then(result =>{
    if(!result){
      return res.status(400).send('user not found');
    }
    result.authenticate(req.body.password).then(user =>{
      const payload = {id:user.id};
      const token = jwt.sign(payload, process.env.secretOrKey);
      res.send(token);
    }).catch(err =>{
      return res.status(401).send({err});
    });
  });
});


router.get('/users', (req, res) => {
  User.find({}).then(data => res.json(data))
    .catch(err => console.log(err));
});

router.post('/register', (req, res) => {

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

/*  User Login  */
router.post("/login", (req, res) => {
  console.log("----------Login-----------")
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

router.get('/getUser', passport.authenticate('jwt',{session: false}), (req,res) =>{
  res.send(req.user);
});

module.exports = router;