const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./DB.js");
const contactRoute = require('./contact.route');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/contacts', contactRoute);

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(() => {
    console.log("Database is connected");
  },
  err => {
    console.log("Can not connect to the database" + err);
  }
);

app.listen(port, function() {
  console.log("App is running on port:", port);
});
