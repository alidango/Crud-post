// Initializing express.
const express = require("express");
// Assinging the invokation of express in app.
const app = express();
// Requiring dotenv library to reach the variables in .env file.
require("dotenv").config();
// Choosing the port either from .env or 3000 by default.
const PORT = process.env.PORT || 3000;
// Requiring body-parser
const bodyParser = require("body-parser");
// Importing post route and assigning it in postRoute.
const postRoute = require("./routes/post");
// Importing db index.js and assigning it in db variable.
const db = require("./database/index");
// Invoking db  which is basically the connect function in db index.js .
db();

// Using parse body
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Init route in localhost:PORT.
app.get("/", (req, res) => {
  // Sending Hello World to the user (browser).
  res.send("Hello World!");
});

// Using /postRoute as postRoute from routes post.js .
app.use("/postRoute", postRoute);

// Listening to the port and consoling.log the below text.
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
