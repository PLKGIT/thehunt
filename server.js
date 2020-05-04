/*  Express Require  */
const express = require('express');

/*  Mongoose Require  */
const mongoose = require('mongoose');

/*  Body Parser Require  */
const bodyParser = require('body-parser');

/*  Passport Require  */
const passport = require('passport');

/*  Axios Require  */
const axios = require('axios');

/*  User Authentication Require */
const user = require("./routes/api/user");
// const teacher = require("./routes/api/teacher");
// const student = require("./routes/api/student");

/*  Mongo Config  */
const db = require("./config/keys").mongoURI;

// Passport Config
require("./config/passport")(passport);
// require("./config/passport")(passports);
// require("./config/passport")(passportt);

/*  Path  */
const path = require('path');

/*  Secure Variables  */
require('dotenv').config();

/*  Use Express  */
const app = express();

/*  Middleware  */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*  Static Assets  */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

/*  MongoDB Connection  */
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/unlockit", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

/*  Passport Middleware  */
app.use(passport.initialize());

/*  User Authentication Routes  */
app.use("/api/user", user);
// app.use("/api/teacherauth", teacher);
// app.use("/api/studentauth", student);

/*  Server Port Configuration */
const PORT = process.env.PORT || 3001;

/*  Start Server */
app.listen(PORT, function () {
  console.log(`Server running on PORT ${PORT}!`);
});