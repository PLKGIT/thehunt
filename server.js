/*  Body Parser Require  */
const bodyParser = require('body-parser');

/*  Express Require  */
const express = require('express');

/*  Mongoose Require  */
const mongoose = require('mongoose');

/*  Mongo Config  */
const db = require("./config/keys").mongoURI;

/*  Path  */
const path = require('path');

/*  Secure Variables  */
require('dotenv').config();

/*  Use Express  */
const app = express();

/*  Middleware  */
/*  Parse requests application/json content type  */
app.use(bodyParser.urlencoded({ extended: true }));
/*  Parse requests application/x-www-form-urlencoded content type  */
app.use(bodyParser.json());

/*  Static Assets  */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

/*  Include Bcrypt JS  */
var bcrypt = require("bcryptjs");

/*  MongoDB Connection  */
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/unlockit", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

/*  Server Port Configuration */
const PORT = process.env.PORT || 3001;

/*  Start Server */
app.listen(PORT, function () {
  console.log(`Server running on PORT ${PORT}!`);
});