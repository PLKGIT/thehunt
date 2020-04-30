/*  Express  */
const express = require('express');
const app = express();

/*  Path  */
const path = require("path");

/*  Secure Variables  */
require('dotenv').config();

/*  Middleware  */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*  Static Assets  */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  })
}

/*  Server Port Configuration */
const PORT = process.env.PORT || 3001;

/*  Start Server */
app.listen(PORT, function () {
  console.log(`Server running on PORT ${PORT}!`);
});