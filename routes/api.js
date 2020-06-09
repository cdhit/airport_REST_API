var express = require("express");
var AirportRouter = require("./Airport");

var app = express();

app.use("/", AirportRouter);

module.exports = app;