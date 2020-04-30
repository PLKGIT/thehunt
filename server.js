/*  Express  */
const express = require('express');
const app = express();

/*  Path  */
const path = require('path');

/*  Secure Variables  */
require('dotenv').config();

/*  Middleware  */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*  Express Session  */
const expressSession = require('express-session')({
  secret: "iT20kC20uL20nU",
  resave: false,
  saveUninitialized: false
});

app.use(expressSession);

/*  Static Assets  */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname,'client/build')));
}

/*  Mongoose  */
const mongoose = require('mongoose');

/*  Axios  */
const axios = require('axios');

/*  Passport  */
//  const passport = require('passport');
//  app.use(passport.initialize());
//  app.use(passport.session());

/*  Passport Local Mongoose  */
//  const passportLocalMongoose = require('passport-local-mongoose');

/*  MongoDB Connection  */
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/unlockit';
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

/*  Models  */
//  const db = require('./models');

/*  Server Port Configuration */
const PORT = process.env.PORT || 3001;

/*  Start Server */
app.listen(PORT, function () {
  console.log(`Server running on PORT ${PORT}!`);
});