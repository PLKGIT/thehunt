/*  Body Parser Require  */
const bodyParser = require('body-parser');

/*  Express Require  */
const express = require('express');

/*  Require CORS */
const cors = require("cors");

/*  Require Bcrypt JS */
const bcrypt = require("bcryptjs");

/*  Require Path  */
const path = require('path');

/*  Secure Variables  */
require('dotenv').config();

/*  Use Express  */
const app = express();

/*  CORS Options  */
var corsOptions = {
  origin: "https://unlock-it.herokuapp.com"
};

/*  Use CORS  */
app.use(cors(corsOptions));

/*  Middleware  */
/*  Parse requests application/json content type  */
app.use(bodyParser.urlencoded({ extended: true }));
/*  Parse requests application/x-www-form-urlencoded content type  */
app.use(bodyParser.json());

/*  Static Assets  */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

/*  Include Role and User Models  */
const db = require("./models");
const Role = db.role;
const User = db.user;
const Org = db.org;

/*  Auth and User Routes  */
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

/*  App Routes  */
require('./routes/api/apiRoutes')(app);


/*  Connect to MongoDB */
db.mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/unlockit", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("MongoDB connection error", err);
    process.exit();
  });

  /*  User Roles  */

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "teacher"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'teacher' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    };
    initialusers();
  });
}

/*  Create Admin User Account */
function initialusers() {
  User.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new User ({
        username: "admin@unlockit.com",
        first_name: "Admin",
        last_name: "User",
        email: "admin@unlockit.com",
        password: bcrypt.hashSync("p@ssw0rd", 8),
        status:"Active",
        roles: ["5eb70cc6008153002af8c264"],
        group_id:[],
        hunt_id:[]
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin user' to user collection");
      });
    };
    initialorg();
  });
}

/*  Create Organization */
function initialorg() {
  Org.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Org ({
        org_name: "Anytown Elementary",
        org_city: "Anytown",
        org_state: "Any State"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added an 'organization' to Org collection");
      });
    };
  });
}

/*  Simple Route */
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Unlock It!." });
});

// Define API routes here
// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

/*  Server Port Configuration */
const PORT = process.env.PORT || 3001;

/*  Start Server */
app.listen(PORT, function () {
  console.log(`Server running on PORT ${PORT}!`);
});