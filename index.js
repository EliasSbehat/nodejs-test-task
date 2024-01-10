const express = require("express");
const rateLimit = require("express-rate-limit");
const http = require("http");
var methodOverride = require("method-override");
const app = express();
const bodyParser = require("body-parser");
const con = require("./config/db.js");

require("dotenv").config();

// Set up rate limiter middleware
const limiter = rateLimit({
  windowMs: 60 * 1000, // 30 seconds
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later",
});
app.use(limiter);

// connecting route to database
app.use(function (req, res, next) {
  req.con = con;
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This is the method of getting the override value from the request. If a function is provided, the req is passed as the first argument, the res as the second ...
app.use(methodOverride("_method"));

const PORT = 4000;
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

const server = http.createServer(app);
app.use("/users", require("./routes/users"));

server.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
